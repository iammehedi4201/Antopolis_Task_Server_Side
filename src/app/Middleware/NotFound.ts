import { Request, Response } from 'express';
import httpStatus from 'http-status';

const notFound = (req: Request, res: Response) => {
  return res.status(httpStatus.NOT_FOUND).json({
    Success: false,
    message: `Api not found`,
  });
};

export default notFound;
// {req.originalUrl}
