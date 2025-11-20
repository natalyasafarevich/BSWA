import { createSessionClient, getLoggedInUser } from '@/shared/module/appwrite';
import { redirect } from 'next/navigation';

export default async function Home() {
  const user = await getLoggedInUser();

  if (!user) redirect('/auth/sign-up');

  redirect('/account');
}
