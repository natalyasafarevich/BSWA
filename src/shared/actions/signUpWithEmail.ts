'use server';

import { ID } from 'node-appwrite';
import { createAdminClient } from '../module/appwrite';
import { cookies } from 'next/headers';
import { SignUpSchemaData } from '../schemes/signUpSchema';

export async function signUpWithEmail(formData: SignUpSchemaData) {
  const email = formData.email;
  const password = formData.password;
  const name = formData.name;

  const { account } = await createAdminClient();

  await account.create({
    userId: ID.unique(),
    email,
    password,
    name,
  });
  const session = await account.createEmailPasswordSession({
    email,
    password,
  });

  (await cookies()).set('my-custom-session', session.secret, {
    path: '/',
    httpOnly: true,
    sameSite: 'strict',
    secure: true,
  });
}
