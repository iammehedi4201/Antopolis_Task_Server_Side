import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { globalErrorHandler } from './app/Middleware/GobalErrorHandlers';
import notFound from './app/Middleware/NotFound';
import route from './app/Routes';
const app: Application = express();

//parser
app.use(express.json());
app.use(express.text());

//using cors
app.use(cors());

//application routes
app.use('/api/v1', route);

app.get('/', async (req: Request, res: Response) => {
  res.send('Hello There');
});

//Global Error Handler
app.use(globalErrorHandler);

//not found middlewar
app.use(notFound);
export default app;
