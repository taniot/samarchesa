import { motion } from 'framer-motion';
import { useContext } from 'react';
import MenuContext from '../../contexts/menu.context';
import styles from './menu.module.scss';

const Path = (props: any) => {
  console.log({ props });

  return (
    <motion.path
      fill='transparent'
      strokeWidth='2'
      stroke='#efefef'
      strokeLinecap='square'
      {...props}
    />
  );
};

export const MenuToggle = () => {
  const { isOpen, toggleOpen } = useContext(MenuContext);
  return (
    <motion.button
      animate={isOpen ? 'open' : 'closed'}
      onClick={toggleOpen}
      className={styles.button}
    >
      <svg width='25' height='20' viewBox='0 0 20 20'>
        <Path
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: {
              d: 'M 3 16.5 L 17 2.5',
              backgroundColor: ['hsl(0, 100, 50)', 'hsl(-120, 100, 50)'],
            },
          }}
        />
        <Path
          d='M 2 9.423 L 20 9.423'
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' },
          }}
        />
      </svg>
    </motion.button>
  );
};
