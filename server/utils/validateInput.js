// server/utils/validateInput.js
import { body } from 'express-validator';

export const validatePost = [
  body('title').notEmpty().withMessage('Title is required'),
  body('content').notEmpty().withMessage('Content is required'),
];