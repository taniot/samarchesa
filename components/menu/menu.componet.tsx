import { AnimatePresence, motion } from 'framer-motion';
import { useContext } from 'react';
import MenuContext from '../../contexts/menu.context';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import styles from './menu.module.scss';
import Link from 'next/link';

const links = [
  { name: 'Giuseppe Cugusi', to: '/#about', id: 2 },
  { name: 'Formaggi', to: '#', id: 3 },
  { name: 'Contatti', to: '#', id: 4 },
  { name: 'Press', to: '/press', id: 5 },
];

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const Menu = () => {
  const { isOpen: open, toggleOpen } = useContext(MenuContext);
  const isSmall = useMediaQuery('(max-width: 640px)');

  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          className={styles.aside}
          initial={{ width: 0 }}
          animate={{
            transition: { delay: 0.1, duration: 0.3 },
            width: isSmall ? '100vw' : '500px',
          }}
          exit={{
            width: 0,
            transition: { delay: 0.1, duration: 0.3 },
          }}
        >
          <motion.div
            className={styles.container}
            initial='closed'
            animate='open'
            exit='closed'
            variants={sideVariants}
          >
            {links.map(({ name, to, id }) => (
              <Link key={id} href={to}>
                <motion.a
                  href={to}
                  whileHover={{ scale: 1.1 }}
                  variants={itemVariants}
                  onClick={toggleOpen}
                >
                  {name}
                </motion.a>
              </Link>
            ))}
          </motion.div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default Menu;
