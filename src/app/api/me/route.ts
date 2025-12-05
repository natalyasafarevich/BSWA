import { createSessionClient } from '@/shared/module/appwrite-ssr';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const { account } = await createSessionClient();
    const user = await account.get();
    return NextResponse.json(user);
  } catch (err) {
    return NextResponse.json({ user: null }, { status: 401 });
  }
}

export async function PATCH() {
  try {
    const { account } = await createSessionClient();
    const user = await account.get();
    return NextResponse.json(user);
  } catch (err) {
    return NextResponse.json({ user: null }, { status: 401 });
  }
}
