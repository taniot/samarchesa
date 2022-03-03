import Image from 'next/image';
import { FC } from 'react';
import styles from './brand.module.scss';
import cls from 'classnames';

export enum BrandType {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

interface BrandProps {
  type: BrandType;
}

const Brand: FC<BrandProps> = ({ type }) => {
  return (
    <div className={cls(styles.brandContainer, styles[type])}>
      <Image
        src='/images/logo.svg'
        className={styles.brand}
        layout='fill'
        alt='Sa Marchesa'
        priority
      />
    </div>
  );
};

export default Brand;
