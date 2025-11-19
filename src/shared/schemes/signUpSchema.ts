import z from 'zod';
import { agree, confirmPassword, email, name, password } from './baseSchemes';
import { passwordValidation } from '../lib/validation/consts';

export const signUpSchema = z
  .object({
    name,
    email,
    password,
    confirmPassword,
    agree,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: passwordValidation.ERROR_MESSAGES.MISMATCH,
    path: ['confirmPassword'],
  });

export type SignUpSchemaData = z.infer<typeof signUpSchema>;
