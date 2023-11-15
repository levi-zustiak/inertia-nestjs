import { NextFunction, Response } from 'express';

export function inertia(req: Request, res: Response, next: NextFunction) {
  res.set('Vary', 'X-Inertia');

  console.log(req);

  next();
}
