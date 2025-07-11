import { Request, Response, NextFunction } from 'express';
import User, { IUser } from '../models/user.model.js';
import { generateAccessToken, generateRefreshToken, verifyRefreshToken } from '../utils/token.util.js';
import { AppError } from '../middleware/error.middleware.js';

/**
 * @desc    Registra un nuovo utente
 * @route   POST /api/auth/register
 * @access  Public
 */
export const register = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { name, email, password } = req.body;

    // Verifica se l'utente esiste già
    const userExists = await User.findOne({ email });
    if (userExists) {
      const error = new Error('Utente già registrato con questa email') as AppError;
      error.statusCode = 400;
      return next(error);
    }

    // Crea un nuovo utente
    const user = await User.create({
      name,
      email,
      password
    });

    // Genera token
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    // Risposta
    res.status(201).json({
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        bio: user.bio,
        avatarUrl: user.avatarUrl,
        createdAt: user.createdAt
      },
      tokens: {
        accessToken,
        refreshToken
      }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Login utente
 * @route   POST /api/auth/login
 * @access  Public
 */
export const login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { email, password } = req.body;

    // Verifica se l'utente esiste
    const user = await User.findOne({ email });
    if (!user) {
      const error = new Error('Credenziali non valide') as AppError;
      error.statusCode = 401;
      return next(error);
    }

    // Verifica la password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      const error = new Error('Credenziali non valide') as AppError;
      error.statusCode = 401;
      return next(error);
    }

    // Genera token
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    // Risposta
    res.status(200).json({
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        bio: user.bio,
        avatarUrl: user.avatarUrl,
        createdAt: user.createdAt
      },
      tokens: {
        accessToken,
        refreshToken
      }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Rinnova l'access token usando il refresh token
 * @route   POST /api/auth/refresh
 * @access  Public
 */
export const refresh = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      const error = new Error('Refresh token mancante') as AppError;
      error.statusCode = 400;
      return next(error);
    }

    // Verifica il refresh token
    const decoded = verifyRefreshToken(refreshToken);
    if (!decoded) {
      const error = new Error('Refresh token non valido o scaduto') as AppError;
      error.statusCode = 401;
      return next(error);
    }

    // Trova l'utente
    const user = await User.findById(decoded.id);
    if (!user) {
      const error = new Error('Utente non trovato') as AppError;
      error.statusCode = 404;
      return next(error);
    }

    // Genera un nuovo access token
    const accessToken = generateAccessToken(user);

    // Risposta
    res.status(200).json({
      success: true,
      accessToken
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Ottieni i dati dell'utente corrente
 * @route   GET /api/auth/me
 * @access  Private
 */
export const getMe = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    // L'utente è già stato aggiunto alla richiesta dal middleware protect
    const userId = req.user.id;

    // Trova l'utente
    const user = await User.findById(userId).select('-password');
    if (!user) {
      const error = new Error('Utente non trovato') as AppError;
      error.statusCode = 404;
      return next(error);
    }

    // Risposta
    res.status(200).json({
      success: true,
      user
    });
  } catch (error) {
    next(error);
  }
};

export default {
  register,
  login,
  refresh,
  getMe
};
