import z from 'zod';

const CreatePetSchema = z.object({
  body: z.object({
    name: z.string(),
    category: z.string(),
    image: z.string(),
  }),
});

export const PetsValidationSchema = {
  CreatePetSchema,
};
