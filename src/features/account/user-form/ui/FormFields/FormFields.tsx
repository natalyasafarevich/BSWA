import { Input } from '@/shared/ui/input/Input';
import { userForm } from '../../lib/userForm';
import s from './FormFields.module.scss';
import { UserSettingsSchemaData } from '@/shared/schemes/userSettingSchemes';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

type Props = {
  register: UseFormRegister<UserSettingsSchemaData>;
  errors: FieldErrors<UserSettingsSchemaData>;
};
export const FormFields = ({ register, errors }: Props) => {
  return (
    <div className={s.fields}>
      {userForm.map((field, i) => (
        <div key={i} className={s.box}>
          <Input
            readOnly={field.register == 'email'}
            {...field}
            {...register(field.register as keyof UserSettingsSchemaData)}
            error={errors[field.register as keyof UserSettingsSchemaData]?.message}
          />
        </div>
      ))}
    </div>
  );
};
