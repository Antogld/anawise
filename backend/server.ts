import app from './app';
import { connectDB } from './src/config/db';
import dotenv from 'dotenv';

// Carica le variabili d'ambiente
dotenv.config();

// Porta del server
const PORT = process.env.PORT || 5000;

// Connessione al database
connectDB()
  .then(() => {
    // Avvia il server solo dopo la connessione al database
    app.listen(PORT, () => {
      console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error(`Errore durante l'avvio del server:`, error);
    process.exit(1);
  });
