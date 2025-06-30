import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import dotenv from 'dotenv';

// Importa le rotte
import authRoutes from './src/routes/auth.routes';
import postRoutes from './src/routes/post.routes';

// Importa i middleware per la gestione degli errori
import { errorHandler, notFound } from './src/middleware/error.middleware';

// Carica le variabili d'ambiente
dotenv.config();

// Inizializza Express
const app = express();

// Middleware
app.use(express.json()); // Parsing del corpo JSON
app.use(express.urlencoded({ extended: true })); // Parsing dei form URL-encoded
app.use(cors()); // Abilita CORS per tutte le origini
app.use(helmet()); // Sicurezza HTTP

// Logging in ambiente di sviluppo
if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

// Rotta di base
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Anawise Social API',
    version: '1.0.0'
  });
});

// Rotte API
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);

// Middleware per gestire le rotte non trovate
app.use(notFound);

// Middleware per la gestione centralizzata degli errori
app.use(errorHandler);

export default app;
