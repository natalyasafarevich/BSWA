import { createAdminClient } from '@/shared/module/appwrite';
import { NextResponse } from 'next/server';
import { ID } from 'node-appwrite';

export async function POST(req: Request) {
  const { email, password, name } = await req.json();
  const { account } = await createAdminClient();

  try {
    // создаем пользователя
    await account.create({
      userId: ID.unique(),
      email,
      password,
      name,
    });

    // создаем сессию
    const session = await account.createSession(email, password);

    // возвращаем cookie
    const response = NextResponse.json({ success: true });
    response.cookies.set({
      name: 'my-custom-session',
      value: session.$id,
      path: '/',
      httpOnly: true,
      sameSite: 'strict',
      secure: process.env.NODE_ENV === 'production',
      maxAge: Math.floor((session.expire - Date.now()) / 1000),
    });

    return response;
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
