import { Schema, model } from 'mongoose';
import { TCategory } from './Categories.interface';

const CategorySchema = new Schema<TCategory>(
  {
    name: {
      type: 'String',
      required: [true, 'Name is required'],
      trim: true,
    },
    icon: {
      type: 'String',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const Category = model<TCategory>('Category', CategorySchema);
