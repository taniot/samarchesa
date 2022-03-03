import { FC } from 'react';
import styles from './titleSection.module.scss';

interface TitleProps {
  title: string;
  subtitle?: string;
}

const TitleSection: FC<TitleProps> = ({ title, subtitle }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <h3 className={styles.subtitle}>{subtitle}</h3>
    </div>
  );
};

export default TitleSection;
