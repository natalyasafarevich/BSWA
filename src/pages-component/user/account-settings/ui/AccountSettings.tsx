'use client';
import { UserCard } from '@/features/account/user-card';
import { UserForm } from '@/features/account/user-form';
import { useAppSelector } from '@/shared/hooks/useAppSelector';
import { selectInitialData } from '@/shared/slices/user/user-slice';
import { Loader } from '@/shared/ui/loader/Loader';
import s from './AccountSettings.module.scss';
export const AccountSettings = () => {
  const user = useAppSelector(selectInitialData);
  //   if (!user.name) return <>Loading...</>;
  return (
    <div className={s.container}>
      <Loader isVisible={!user.name} />
      <UserCard />
      <UserForm />
    </div>
  );
};
