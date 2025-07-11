import { Router } from 'express';
import { 
  getPosts, 
  getPost, 
  createPost, 
  updatePost, 
  deletePost, 
  toggleLike, 
  addComment 
} from '../controllers/post.controller';
import { protect } from '../middleware/auth.middleware';

const router = Router();

/**
 * @route   GET /api/posts
 * @desc    Ottieni tutti i post
 * @access  Public
 */
router.get('/', getPosts);

/**
 * @route   GET /api/posts/:id
 * @desc    Ottieni un singolo post
 * @access  Public
 */
router.get('/:id', getPost);

/**
 * @route   POST /api/posts
 * @desc    Crea un nuovo post
 * @access  Private
 */
router.post('/', protect, createPost);

/**
 * @route   PUT /api/posts/:id
 * @desc    Aggiorna un post
 * @access  Private
 */
router.put('/:id', protect, updatePost);

/**
 * @route   DELETE /api/posts/:id
 * @desc    Elimina un post
 * @access  Private
 */
router.delete('/:id', protect, deletePost);

/**
 * @route   PUT /api/posts/:id/like
 * @desc    Aggiungi/rimuovi like a un post
 * @access  Private
 */
router.put('/:id/like', protect, toggleLike);

/**
 * @route   POST /api/posts/:id/comment
 * @desc    Aggiungi un commento a un post
 * @access  Private
 */
router.post('/:id/comment', protect, addComment);

export default router;
