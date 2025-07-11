import app from './app.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';

// Carica le variabili d'ambiente
dotenv.config();

// Porta del server
const PORT = process.env.PORT || 5000;

// Avvia il server direttamente senza attendere la connessione al database
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});

// Commento: la connessione al database è stata temporaneamente disabilitata per test
// connectDB()
//   .then(() => {
//     console.log('Database connesso con successo');
//   })
//   .catch((error) => {
//     console.error(`Errore durante la connessione al database:`, error);
//   });
