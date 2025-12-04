import s from './Loader.module.scss';

type Props = {
  isVisible: boolean;
};
export const Loader = ({ isVisible }: Props) => {
  if (!isVisible) return;
  return (
    <div className={s.box}>
      <div className={s.loader}></div>
    </div>
  );
};
