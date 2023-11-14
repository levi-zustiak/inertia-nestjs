import { Injectable, Module, NestMiddleware } from '@nestjs/common';
import { NextFunction, Response } from 'express';

@Injectable()
export class InertiaMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(req.headers);
    next();
  }
}

export function inertia(req: Request, res: Response, next: NextFunction) {
  res.set('Vary', 'X-Inertia');

  next();
}
