'use client';
import { Modal } from '@/shared/ui/modal/Modal';
import s from './ModalConfirmPassword.module.scss';
import { Input } from '@/shared/ui/input/Input';
import { DialogClose } from '@radix-ui/react-dialog';
import { Button } from '@/shared/ui/button/Button';
import { ComponentPropsWithoutRef, useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

type Props = {
  setValue: (e: string) => void;
} & ComponentPropsWithoutRef<typeof Dialog.Root>;
export const ModalConfirmPassword = ({ setValue, ...props }: Props) => {
  const [password, setPassword] = useState<string | null>(null);

  useEffect(() => {
    if (password) {
      setValue(password);
    }
  }, [password]);

  return (
    <Modal title="Please confirm your password to change your phone number" {...props}>
      <div className={s.content}>
        <Input
          type="password"
          label="Password"
          fullWidth
          onChange={(e) => setPassword(e.currentTarget.value)}
          value={password ?? ''}
        />
        <DialogClose asChild>
          <Button variant="primary" disabled={!password} className={s.button}>
            Confirm
          </Button>
        </DialogClose>
      </div>
    </Modal>
  );
};
