import { NextFunction, Response } from 'express';

export function inertia(req: Request, res: Response, next: NextFunction) {
  res.header('Vary', 'X-Inertia');

  next();
}
