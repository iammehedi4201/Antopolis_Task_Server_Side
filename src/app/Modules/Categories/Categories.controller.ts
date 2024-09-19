// create a new category To Db

import catchAsync from '../../Utils/catchAsync';
import sendResponse from '../../Utils/SendResponse';
import { CategoriesService } from './Categories.service';

const createCategoryToDB = catchAsync(async (req, res) => {
  const result = await CategoriesService.createCategoryToDB(req.body);
  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: 'Category created successfully',
    data: result,
  });
});

// get all categories
// get all pets
const getAllCategoriesFromDB = catchAsync(async (req, res) => {
  const result = await CategoriesService.getAllCategoriesFromDB();
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'All Categories fetched successfully',
    data: result,
  });
});

export const CategoriesController = {
  createCategoryToDB,
  getAllCategoriesFromDB,
};
