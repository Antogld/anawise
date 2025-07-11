import { Request, Response, NextFunction } from 'express';
import Post, { IPost } from '../models/post.model.js';
import { AppError } from '../middleware/error.middleware.js';

/**
 * @desc    Ottieni tutti i post
 * @route   GET /api/posts
 * @access  Public
 */
export const getPosts = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    // Opzioni di paginazione
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;

    // Trova i post con paginazione e popola i dati dell'utente
    const posts = await Post.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .populate('user', 'name avatarUrl')
      .populate('comments.user', 'name avatarUrl');

    // Conta il numero totale di post
    const total = await Post.countDocuments();

    // Risposta
    res.status(200).json({
      success: true,
      count: posts.length,
      total,
      page,
      pages: Math.ceil(total / limit),
      posts
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Ottieni un singolo post
 * @route   GET /api/posts/:id
 * @access  Public
 */
export const getPost = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const postId = req.params.id;

    // Trova il post e popola i dati dell'utente
    const post = await Post.findById(postId)
      .populate('user', 'name avatarUrl')
      .populate('comments.user', 'name avatarUrl');

    if (!post) {
      const error = new Error('Post non trovato') as AppError;
      error.statusCode = 404;
      return next(error);
    }

    // Risposta
    res.status(200).json({
      success: true,
      post
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Crea un nuovo post
 * @route   POST /api/posts
 * @access  Private
 */
export const createPost = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { content, imageUrl, videoUrl } = req.body;
    const userId = req.user.id;

    // Crea un nuovo post
    const post = await Post.create({
      user: userId,
      content,
      imageUrl: imageUrl || '',
      videoUrl: videoUrl || ''
    });

    // Popola i dati dell'utente per la risposta
    const populatedPost = await Post.findById(post._id)
      .populate('user', 'name avatarUrl');

    // Risposta
    res.status(201).json({
      success: true,
      post: populatedPost
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Aggiorna un post
 * @route   PUT /api/posts/:id
 * @access  Private
 */
export const updatePost = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const postId = req.params.id;
    const { content, imageUrl, videoUrl } = req.body;
    const userId = req.user.id;

    // Trova il post
    const post = await Post.findById(postId);

    if (!post) {
      const error = new Error('Post non trovato') as AppError;
      error.statusCode = 404;
      return next(error);
    }

    // Verifica che l'utente sia il proprietario del post
    if (post.user.toString() !== userId) {
      const error = new Error('Non autorizzato a modificare questo post') as AppError;
      error.statusCode = 403;
      return next(error);
    }

    // Aggiorna il post
    post.content = content || post.content;
    post.imageUrl = imageUrl !== undefined ? imageUrl : post.imageUrl;
    post.videoUrl = videoUrl !== undefined ? videoUrl : post.videoUrl;

    // Salva le modifiche
    await post.save();

    // Popola i dati dell'utente per la risposta
    const updatedPost = await Post.findById(postId)
      .populate('user', 'name avatarUrl');

    // Risposta
    res.status(200).json({
      success: true,
      post: updatedPost
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Elimina un post
 * @route   DELETE /api/posts/:id
 * @access  Private
 */
export const deletePost = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const postId = req.params.id;
    const userId = req.user.id;

    // Trova il post
    const post = await Post.findById(postId);

    if (!post) {
      const error = new Error('Post non trovato') as AppError;
      error.statusCode = 404;
      return next(error);
    }

    // Verifica che l'utente sia il proprietario del post
    if (post.user.toString() !== userId) {
      const error = new Error('Non autorizzato a eliminare questo post') as AppError;
      error.statusCode = 403;
      return next(error);
    }

    // Elimina il post
    await post.deleteOne();

    // Risposta
    res.status(200).json({
      success: true,
      message: 'Post eliminato con successo'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Aggiungi/rimuovi like a un post
 * @route   PUT /api/posts/:id/like
 * @access  Private
 */
export const toggleLike = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const postId = req.params.id;
    const userId = req.user.id;

    // Trova il post
    const post = await Post.findById(postId);

    if (!post) {
      const error = new Error('Post non trovato') as AppError;
      error.statusCode = 404;
      return next(error);
    }

    // Controlla se l'utente ha già messo like
    const isLiked = post.likes.includes(userId);

    // Aggiunge o rimuove il like
    if (isLiked) {
      // Rimuovi like
      post.likes = post.likes.filter(id => id.toString() !== userId);
    } else {
      // Aggiungi like
      post.likes.push(userId);
    }

    // Salva le modifiche
    await post.save();

    // Risposta
    res.status(200).json({
      success: true,
      liked: !isLiked,
      likesCount: post.likes.length
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Aggiungi un commento a un post
 * @route   POST /api/posts/:id/comment
 * @access  Private
 */
export const addComment = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const postId = req.params.id;
    const { text } = req.body;
    const userId = req.user.id;

    // Trova il post
    const post = await Post.findById(postId);

    if (!post) {
      const error = new Error('Post non trovato') as AppError;
      error.statusCode = 404;
      return next(error);
    }

    // Crea un nuovo commento
    const comment = {
      user: userId,
      text,
      createdAt: new Date()
    };

    // Aggiungi il commento al post
    post.comments.push(comment);

    // Salva le modifiche
    await post.save();

    // Popola i dati dell'utente per la risposta
    const updatedPost = await Post.findById(postId)
      .populate('user', 'name avatarUrl')
      .populate('comments.user', 'name avatarUrl');

    // Risposta
    res.status(201).json({
      success: true,
      post: updatedPost
    });
  } catch (error) {
    next(error);
  }
};

export default {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
  toggleLike,
  addComment
};
