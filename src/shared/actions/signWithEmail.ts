'use server';

import { ID } from 'node-appwrite';
import { createAdminClient, createSessionClient } from '../module/appwrite';
import { cookies } from 'next/headers';

type FormData = { email: string; password: string; name?: string };

export async function signWithEmail(formData: FormData, isRegistration: boolean) {
  const email = formData.email;
  const password = formData.password;
  const name = formData.name;

  const { account } = await createAdminClient();

  if (isRegistration) {
    await account.create({
      userId: ID.unique(),
      email,
      password,
      name,
    });
  }

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
