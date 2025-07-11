import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcrypt';

/**
 * Interfaccia per il modello User
 */
export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  bio?: string;
  avatarUrl?: string;
  createdAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

/**
 * Schema per il modello User
 */
const UserSchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, 'Il nome è obbligatorio'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'L\'email è obbligatoria'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Inserisci un indirizzo email valido']
  },
  password: {
    type: String,
    required: [true, 'La password è obbligatoria'],
    minlength: [6, 'La password deve essere di almeno 6 caratteri']
  },
  bio: {
    type: String,
    default: ''
  },
  avatarUrl: {
    type: String,
    default: ''
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

/**
 * Middleware pre-save per l'hashing della password
 */
UserSchema.pre<IUser>('save', async function(next) {
  // Esegui l'hash solo se la password è stata modificata o è nuova
  if (!this.isModified('password')) return next();

  try {
    // Genera un salt con fattore di costo 10
    const salt = await bcrypt.genSalt(10);
    // Hash della password con il salt
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error: any) {
    next(error);
  }
});

/**
 * Metodo per confrontare le password
 */
UserSchema.methods.comparePassword = async function(candidatePassword: string): Promise<boolean> {
  try {
    return await bcrypt.compare(candidatePassword, this.password);
  } catch (error) {
    return false;
  }
};

export default mongoose.model<IUser>('User', UserSchema);
