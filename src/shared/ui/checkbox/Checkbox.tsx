import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';
import s from './Checkbox.module.scss';
import * as CheckboxRadix from '@radix-ui/react-checkbox';

type Ref = ComponentRef<typeof CheckboxRadix.Root>;

type Props = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<typeof CheckboxRadix.Root>;

export const Checkbox = forwardRef<Ref, Props>(({ label, id, ...props }, ref) => {
  return (
    <div className={s.container}>
      <CheckboxRadix.Root className={s.checkbox} id={id} ref={ref} {...props}>
        <CheckboxRadix.Indicator className={s.indicator}>
          <span className={s.icon}></span>
        </CheckboxRadix.Indicator>
      </CheckboxRadix.Root>
      <label className={s.label} htmlFor={id}>
        {label}
      </label>
    </div>
  );
});

Checkbox.displayName = 'Checkbox';
