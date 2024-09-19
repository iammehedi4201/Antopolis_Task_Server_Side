import { Router } from 'express';
import validateRequest from '../../Middleware/validateRequest';
import { PetsValidationSchema } from './Pets.validation';
import { PetsController } from './Pets.controller';

const router = Router();

// create a new pet route
router.post(
  '/create-pet',
  validateRequest(PetsValidationSchema.CreatePetSchema),
  PetsController.createPetToDB,
);

// get all pets route
router.get('/get-pets', PetsController.getAllPetsFromDB);

//Delete a pet or multiple pets
router.delete('/delete-pets', PetsController.deletePetsFromDB);

export const PetsRoutes = router;
