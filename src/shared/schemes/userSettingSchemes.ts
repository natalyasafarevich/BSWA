import z from 'zod';
import { email, name, nick, phone } from './baseSchemes';

export const userSettingSchemes = z.object({
  name,
  email,
  nick,
  phone,
  genres: z.array(z.string()).min(1, 'Select at least one genre'),
});

export type UserSettingsSchemaData = z.infer<typeof userSettingSchemes>;
