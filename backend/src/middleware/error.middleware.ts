import { Request, Response, NextFunction } from 'express';

/**
 * Interfaccia per gli errori personalizzati
 */
export interface AppError extends Error {
  statusCode?: number;
  errors?: any;
}

/**
 * Middleware per la gestione centralizzata degli errori
 * Cattura tutti gli errori e invia una risposta formattata
 */
export const errorHandler = (err: AppError, req: Request, res: Response, next: NextFunction): void => {
  // Log dell'errore per debugging
  console.error('Errore:', err);

  // Codice di stato predefinito
  const statusCode = err.statusCode || 500;
  
  // Messaggio di errore
  const message = err.message || 'Errore del server';
  
  // Errori di validazione (opzionali)
  const errors = err.errors || null;

  // Invia la risposta di errore
  res.status(statusCode).json({
    success: false,
    message,
    errors,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
};

/**
 * Middleware per gestire le rotte non trovate
 */
export const notFound = (req: Request, res: Response, next: NextFunction): void => {
  const error = new Error(`Risorsa non trovata - ${req.originalUrl}`) as AppError;
  error.statusCode = 404;
  next(error);
};

export default {
  errorHandler,
  notFound
};
