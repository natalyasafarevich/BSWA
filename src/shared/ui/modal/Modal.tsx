import { ComponentPropsWithoutRef, PropsWithChildren, ReactNode } from 'react';
import s from './Modal.module.scss';
import * as Dialog from '@radix-ui/react-dialog';
import { CloseIcon } from '../icons/CloseIcon';

type Props = {
  title: string;
  trigger?: ReactNode;
} & PropsWithChildren &
  ComponentPropsWithoutRef<typeof Dialog.Root>;

export const Modal = ({ title, trigger, children, ...props }: Props) => {
  return (
    <Dialog.Root {...props}>
      {trigger && <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>}
      <Dialog.Portal>
        <Dialog.Overlay className={s.overlay} />
        <Dialog.Content className={s.content}>
          <Dialog.Title className={s.title}>{title}</Dialog.Title>
          {children}

          <Dialog.Close asChild>
            <button aria-label={'Close'} className={s.close}>
              <CloseIcon color="#FFFF" />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
