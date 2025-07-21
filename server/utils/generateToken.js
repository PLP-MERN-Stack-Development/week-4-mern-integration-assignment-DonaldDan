// server/utils/generateToken.js
import jwt from 'jsonwebtoken';
import { jwtSecret } from '../config/config.js';

export const generateToken = (id) => {
  return jwt.sign({ id }, jwtSecret, { expiresIn: '7d' });
};