import Image from 'next/image';
import s from './UserPhoto.module.scss';
import clsx from 'clsx';

type Props = {
  variant?: 'l' | 'm' | 's';
  alt: string;
  src: string;
};
export const UserPhoto = ({ src, alt, variant = 'm' }: Props) => {
  const className = clsx(s[`image_${variant}`], s.image);
  return <Image src={src} width={500} height={500} className={className} alt={alt} />;
};
