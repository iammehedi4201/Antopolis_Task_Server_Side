import { TCategory } from './Categories.interface';
import { Category } from './Categories.model';

// create a new category To Db
const createCategoryToDB = async (payLoad: TCategory) => {
  const result = await Category.create(payLoad);
  return result;
};

// get all categories
const getAllCategoriesFromDB = async () => {
  const result = await Category.find();
  return result;
};

export const CategoriesService = {
  createCategoryToDB,
  getAllCategoriesFromDB,
};
