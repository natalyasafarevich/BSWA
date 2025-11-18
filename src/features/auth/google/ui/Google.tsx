import { Button } from '@/shared/ui/button/Button';
import s from './Google.module.scss';

export const Google = () => {
  return (
    <Button variant="text" fullWidth className={s.button}>
      <span></span>
      Sign up with Google
    </Button>
  );
};
