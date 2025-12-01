'use client';
import { UserPhoto } from '@/shared/ui/user-photo/UserPhoto';
import s from './UserCard.module.scss';
import { useAppSelector } from '@/shared/hooks/useAppSelector';
import { selectInitialData } from '@/shared/slices/user/user-slice';

export const UserCard = () => {
  const userData = useAppSelector(selectInitialData);
  return (
    <div>
      <UserPhoto src="/test-user-icon.svg" alt="user-photo" />
    </div>
  );
};
