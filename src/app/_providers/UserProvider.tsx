'use client';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { getLoggedInUser } from '@/shared/module/appwrite';
import { setInitialUserData } from '@/shared/slices/user/user-slice';
import { User } from '@/shared/types/user/UserType';
import { PropsWithChildren, useEffect } from 'react';

export const UserProvider = ({ children }: PropsWithChildren) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function fetchUser() {
      const res = await fetch('/api/me');
      if (!res.ok) return;
      const data: User = await res.json();
      if (data) dispatch(setInitialUserData({ initialData: data }));
    }
    fetchUser();
  }, []);

  return <>{children}</>;
};
