import { Router } from 'express';
import { CategoriesController } from './Categories.controller';
import validateRequest from '../../Middleware/validateRequest';
import { CategoriesValidationSchema } from './Categories.validation';

const router = Router();

//create category
router.post(
  '/create-category',
  validateRequest(CategoriesValidationSchema.createCategorySchema),
  CategoriesController.createCategoryToDB,
);

//get all categories
router.get('/get-all-categories', CategoriesController.getAllCategoriesFromDB);

export const CategoriesRoutes = router;
