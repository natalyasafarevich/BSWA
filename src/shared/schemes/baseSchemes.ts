import { z } from 'zod';
import { passwordValidation, phoneRegex } from '../lib/validation/consts';

export const email = z
  .string()
  .min(1, 'Email is required')
  .email('Please enter a valid email address');

export const name = z.string().optional();

export const password = z
  .string()
  .min(passwordValidation.MIN_LENGTH, {
    message: `Minimum number of characters ${passwordValidation.MIN_LENGTH}`,
  })
  .max(passwordValidation.MAX_LENGTH, {
    message: `Maximum number of characters ${passwordValidation.MAX_LENGTH}`,
  })
  .regex(passwordValidation.REGEX, { message: passwordValidation.ERROR_MESSAGES.PATTERN });

export const confirmPassword = z.string();

export const agree = z.boolean();

export const nick = z.string().min(5, 'Nick should to have nim 5 characters');

export const phone = z.string().regex(phoneRegex, 'Invalid Number').optional().or(z.literal(''));
