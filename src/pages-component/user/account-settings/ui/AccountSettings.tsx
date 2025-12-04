'use client';
import { UserCard } from '@/features/account/user-card';
import { UserForm } from '@/features/account/user-form';
import { useAppSelector } from '@/shared/hooks/useAppSelector';
import { selectInitialData } from '@/shared/slices/user/user-slice';

export const AccountSettings = () => {
  const user = useAppSelector(selectInitialData);
  //   if (!user.name) return <>Loading...</>;
  return (
    <div>
      <UserCard />
      <UserForm />
    </div>
  );
};
