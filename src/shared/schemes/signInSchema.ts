import { z } from 'zod';
import { email } from './baseSchemes';

export const SignInSchema = z.object({
  password: z.string().min(1, 'This field cannot be empty'),
  email: email,
});

export type SignInSchemaData = z.infer<typeof SignInSchema>;
