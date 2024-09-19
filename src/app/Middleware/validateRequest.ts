import { AnyZodObject } from 'zod';
import catchAsync from '../Utils/catchAsync';

const validateRequest = (Schema: AnyZodObject) => {
  return catchAsync(async (req, res, next) => {
    await Schema.parseAsync({
      body: req.body,
    });
    next();
  });
};

export default validateRequest;
