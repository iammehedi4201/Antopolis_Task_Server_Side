import express from 'express';
import { PetsRoutes } from '../Modules/Pets/Pets.route';
import { CategoriesRoutes } from '../Modules/Categories/Categories.route';

const route = express.Router();

export const moduleRoute = [
  {
    path: '/pet',
    route: PetsRoutes,
  },
  {
    path: '/category',
    route: CategoriesRoutes,
  },
];

moduleRoute.forEach((Route) => route.use(Route.path, Route.route));

export default route;
