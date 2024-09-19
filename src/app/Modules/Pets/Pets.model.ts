import { Schema, model } from 'mongoose';
import { TPet } from './Pets.interface';

const petSchema = new Schema<TPet>(
  {
    name: {
      type: 'String',
      required: [true, 'Name is required'],
      trim: true,
    },
    category: {
      type: 'String',
      required: [true, 'Category is required'],
      trim: true,
    },
    image: {
      type: 'String',
      required: [true, 'Image is required'],
      trim: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const Pet = model<TPet>('Pet', petSchema);
