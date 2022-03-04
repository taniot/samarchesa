import cls from 'classnames';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import Menu from '../menu/menu.componet';

import { MenuToggle } from '../menu/toggle.component';
import styles from './header.module.scss';

interface Props {
  stuck: boolean;
}

const variants = {
  visible: { opacity: 1, transition: { duration: 0.2 } },
  hidden: { opacity: 0, transition: { duration: 0.2 } },
};

const Header: FC<Props> = ({ stuck }) => {
  let stuckClass = stuck === true ? styles['stuck'] : '';

  return (
    <motion.header
      initial='hidden'
      animate='visible'
      exit='hidden'
      variants={variants}
      className={cls(styles.header, stuckClass)}
    >
      <div className={styles.brand}>
        <Image
          src='/images/logo-square.svg'
          layout='fill'
          alt='Sa Marchesa'
          priority
        />
      </div>

      <MenuToggle />
      <Menu />
    </motion.header>
  );
};

export default Header;
