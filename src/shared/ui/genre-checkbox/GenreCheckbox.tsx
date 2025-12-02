import { ComponentPropsWithoutRef, ComponentRef, forwardRef, useState } from 'react';
import s from './GenreCheckbox.module.scss';
import * as CheckboxRadix from '@radix-ui/react-checkbox';

type Ref = ComponentRef<typeof CheckboxRadix.Root>;

type Props = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<typeof CheckboxRadix.Root>;

export const GenreCheckbox = forwardRef<Ref, Props>(({ label, id, ...props }, ref) => {
  return (
    <div className={s.container}>
      <CheckboxRadix.Root className={s.checkbox} id={id} ref={ref} {...props}>
        <CheckboxRadix.Indicator className={s.indicator}>
          <span className={s.icon}></span>
        </CheckboxRadix.Indicator>
        <div className={s.label}>{label}</div>
      </CheckboxRadix.Root>
    </div>
  );
});

GenreCheckbox.displayName = 'Checkbox';
