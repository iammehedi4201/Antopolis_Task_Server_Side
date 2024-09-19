import Querybuilder from '../../builder/QueryBuilder';
import { TPet } from './Pets.interface';
import { Pet } from './Pets.model';

// create pet To Db
const createPetToDB = async (payLoad: TPet) => {
  const newPet = await Pet.create(payLoad);
  return newPet;
};

const getAllPetsFromDB = async (query: Record<string, unknown>) => {
  const petQuery = new Querybuilder(Pet.find(), query)
    .filter()
    .sort()
    .pagination();
  const result = await petQuery.modelQuery;
  const meta = await petQuery.countTotal();

  return {
    data: result,
    meta,
  };
};

// delete pets
const deletePetsFromDB = async (payLoad: Record<string, unknown>) => {
  // check if pets exists
  const isPetsExists = await Pet.find({ _id: { $in: payLoad.ids } });
  if (!isPetsExists) {
    throw new Error('Pets not found');
  }

  // delete pets
  const deletePets = await Pet.deleteMany({ _id: { $in: payLoad.ids } });
  return deletePets;
};

export const PetsService = {
  createPetToDB,
  getAllPetsFromDB,
  deletePetsFromDB,
};
