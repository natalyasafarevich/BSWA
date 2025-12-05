'use client';
import { Button } from '@/shared/ui/button/Button';
import { Genres } from '@/entities/genres';
import { ToastContainer } from 'react-toastify';
import { ModalConfirmPassword } from '@/entities/modal/confirm-password';
import { useUserForm } from '../model/useUserForm';
import { FormFields } from './FormFields/FormFields';

export const UserForm = () => {
  const { form, onSubmit, open, setIsOpen, setPassword } = useUserForm();

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <FormFields register={form.register} errors={form.formState.errors} />
      <Genres control={form.control} error={form.formState.errors.genres?.message} />
      <Button type="submit" variant="primary" fullWidth>
        Save
      </Button>
      <ModalConfirmPassword setValue={setPassword} open={open} onOpenChange={setIsOpen} />
      <ToastContainer />
    </form>
  );
};
