import { Request, Response, NextFunction } from 'express';
import { verifyAccessToken } from '../utils/token.util.js';

/**
 * Estende l'interfaccia Request per includere l'utente autenticato
 */
declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

/**
 * Middleware per proteggere le rotte che richiedono autenticazione
 * Verifica il token JWT nell'header Authorization
 */
export const protect = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    // Ottieni il token dall'header Authorization
    const authHeader = req.headers.authorization;
    
    // Verifica se l'header è presente e ha il formato corretto
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      res.status(401).json({
        success: false,
        message: 'Accesso non autorizzato. Token mancante o formato non valido'
      });
      return;
    }

    // Estrai il token
    const token = authHeader.split(' ')[1];

    // Verifica il token
    const decoded = verifyAccessToken(token);
    
    if (!decoded) {
      res.status(401).json({
        success: false,
        message: 'Token non valido o scaduto'
      });
      return;
    }

    // Aggiungi l'utente decodificato alla richiesta
    req.user = decoded;
    
    // Passa al prossimo middleware
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Accesso non autorizzato'
    });
  }
};

export default protect;
