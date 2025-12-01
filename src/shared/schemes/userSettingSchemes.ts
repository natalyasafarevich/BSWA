import z from 'zod';
import { email, name, nick, phone } from './baseSchemes';

export const userSettingSchemes = z.object({
  name,
  email,
  nick,
  phone,
});

export type UserSettingsSchemaData = z.infer<typeof userSettingSchemes>;
