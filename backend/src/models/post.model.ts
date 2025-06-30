import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './user.model';

/**
 * Interfaccia per i commenti
 */
export interface IComment {
  user: IUser['_id'];
  text: string;
  createdAt: Date;
}

/**
 * Interfaccia per il modello Post
 */
export interface IPost extends Document {
  user: IUser['_id'];
  content: string;
  imageUrl?: string;
  videoUrl?: string;
  likes: IUser['_id'][];
  comments: IComment[];
  createdAt: Date;
}

/**
 * Schema per i commenti
 */
const CommentSchema: Schema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  text: {
    type: String,
    required: [true, 'Il testo del commento è obbligatorio'],
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

/**
 * Schema per il modello Post
 */
const PostSchema: Schema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  content: {
    type: String,
    required: [true, 'Il contenuto del post è obbligatorio'],
    trim: true
  },
  imageUrl: {
    type: String,
    default: ''
  },
  videoUrl: {
    type: String,
    default: ''
  },
  likes: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  comments: [CommentSchema],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Indice per migliorare le prestazioni delle query
PostSchema.index({ user: 1, createdAt: -1 });

export default mongoose.model<IPost>('Post', PostSchema);
