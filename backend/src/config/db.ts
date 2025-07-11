import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Carica le variabili d'ambiente
dotenv.config();

// URI di connessione a MongoDB
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/anawise-social';

/**
 * Connette l'applicazione al database MongoDB
 */
export const connectDB = async (): Promise<void> => {
  try {
    // Opzioni di connessione
    const options = {
      // Queste opzioni non sono più necessarie nelle versioni recenti di Mongoose,
      // ma vengono mantenute per compatibilità
    };

    // Connessione al database
    const conn = await mongoose.connect(MONGO_URI);
    
    console.log(`MongoDB connesso: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Errore di connessione a MongoDB: ${error instanceof Error ? error.message : 'Errore sconosciuto'}`);
    process.exit(1);
  }
};

// Esportiamo solo la funzione con nome
