import { ComponentPropsWithoutRef } from 'react';
import s from './Input.module.scss';
import clsx from 'clsx';

type Props = {
  label?: string;
  fullWidth?: boolean;
} & ComponentPropsWithoutRef<'input'>;

export const Input = ({ label, fullWidth, ...rest }: Props) => {
  return (
    <>
      {label && <label className={s.label}>{label}</label>}
      <input className={clsx(s.input, fullWidth && s.fullWidth)} {...rest} />
    </>
  );
};
