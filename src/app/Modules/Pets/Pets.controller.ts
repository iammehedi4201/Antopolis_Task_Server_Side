import catchAsync from '../../Utils/catchAsync';
import sendResponse from '../../Utils/SendResponse';
import { PetsService } from './Pets.service';

// create a new pet To Db
const createPetToDB = catchAsync(async (req, res) => {
  const result = await PetsService.createPetToDB(req.body);
  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: 'Pet created successfully',
    data: result,
  });
});

// get all pets
const getAllPetsFromDB = catchAsync(async (req, res) => {
  const result = await PetsService.getAllPetsFromDB(req.query);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'All Pets fetched successfully',
    meta: result?.meta,
    data: result?.data,
  });
});

// delete pets
const deletePetsFromDB = catchAsync(async (req, res) => {
  const result = await PetsService.deletePetsFromDB(req.body);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Pet deleted successfully',
    data: result,
  });
});

export const PetsController = {
  createPetToDB,
  getAllPetsFromDB,
  deletePetsFromDB,
};
