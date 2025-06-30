import { Router } from 'express';
import { register, login, refresh, getMe } from '../controllers/auth.controller';
import { protect } from '../middleware/auth.middleware';

const router = Router();

/**
 * @route   POST /api/auth/register
 * @desc    Registra un nuovo utente
 * @access  Public
 */
router.post('/register', register);

/**
 * @route   POST /api/auth/login
 * @desc    Login utente
 * @access  Public
 */
router.post('/login', login);

/**
 * @route   POST /api/auth/refresh
 * @desc    Rinnova l'access token
 * @access  Public
 */
router.post('/refresh', refresh);

/**
 * @route   GET /api/auth/me
 * @desc    Ottieni i dati dell'utente corrente
 * @access  Private
 */
router.get('/me', protect, getMe);

export default router;
