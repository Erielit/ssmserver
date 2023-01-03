import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
require('dotenv').config();

export interface CustomRequest extends Request {
  token: string | JwtPayload;
}

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '');
    if (!token) {
      throw Error();
    }
    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET!);
    (<CustomRequest>req).token = decodedToken;

    next();
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized' });
  }
};

export const checkRole = (roles: string[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = <any>(<CustomRequest>req).token;
      if (!token) {
        throw Error();
      }
      if (!roles.some((role) => role === token.role)) {
        throw Error();
      }
      next();
    } catch (error) {
      res.status(403).json({ message: 'Forbidden' });
    }
  };
};
