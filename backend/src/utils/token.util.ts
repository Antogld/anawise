import jwt from 'jsonwebtoken';
import { IUser } from '../models/user.model';
import dotenv from 'dotenv';

// Carica le variabili d'ambiente
dotenv.config();

// Chiavi segrete per i token
const JWT_SECRET = process.env.JWT_SECRET || 'jwt_secret_key';
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || 'jwt_refresh_secret_key';

// Durata dei token
const ACCESS_TOKEN_EXPIRES_IN = '1h'; // 1 ora
const REFRESH_TOKEN_EXPIRES_IN = '7d'; // 7 giorni

/**
 * Genera un access token JWT
 * @param user Utente per cui generare il token
 * @returns Access token JWT
 */
export const generateAccessToken = (user: IUser): string => {
  return jwt.sign(
    { 
      id: user._id,
      name: user.name,
      email: user.email 
    },
    JWT_SECRET,
    { expiresIn: ACCESS_TOKEN_EXPIRES_IN }
  );
};

/**
 * Genera un refresh token JWT
 * @param user Utente per cui generare il token
 * @returns Refresh token JWT
 */
export const generateRefreshToken = (user: IUser): string => {
  return jwt.sign(
    { id: user._id },
    JWT_REFRESH_SECRET,
    { expiresIn: REFRESH_TOKEN_EXPIRES_IN }
  );
};

/**
 * Verifica la validità di un access token
 * @param token Access token da verificare
 * @returns Payload decodificato o null se il token non è valido
 */
export const verifyAccessToken = (token: string): any => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
};

/**
 * Verifica la validità di un refresh token
 * @param token Refresh token da verificare
 * @returns Payload decodificato o null se il token non è valido
 */
export const verifyRefreshToken = (token: string): any => {
  try {
    return jwt.verify(token, JWT_REFRESH_SECRET);
  } catch (error) {
    return null;
  }
};

export default {
  generateAccessToken,
  generateRefreshToken,
  verifyAccessToken,
  verifyRefreshToken
};
