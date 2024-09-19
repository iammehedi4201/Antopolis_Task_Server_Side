import z from 'zod';

const createCategorySchema = z.object({
  body: z.object({
    name: z.string(),
    icon: z.string().optional(),
  }),
});

export const CategoriesValidationSchema = {
  createCategorySchema,
};
