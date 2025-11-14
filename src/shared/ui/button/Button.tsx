import { ComponentProps } from 'react';
import s from './Button.module.scss';
import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';

type Props = {
  asChild?: boolean;
  variant?: 'primary' | 'text';
  fullWidth?: boolean;
} & ComponentProps<'button'>;
export const Button = ({ className, asChild, variant = 'text', fullWidth, ...props }: Props) => {
  const classNames = clsx(s.button, s[variant], fullWidth && s.fullWidth, className);

  const Component = asChild ? Slot : 'button';
  return <Component {...props} className={classNames} />;
};
