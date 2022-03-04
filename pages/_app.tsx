import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { useCycle } from 'framer-motion';
import MenuContext from '../contexts/menu.context';
import { useMemo, useEffect } from 'react';
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const value = useMemo(() => {
    return { isOpen, toggleOpen };
  }, [isOpen, toggleOpen]);

  useEffect(() => {
    const body = document.body;
    const { isOpen } = value || {};
    if (isOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
  }, [value]);

  return (
    <MenuContext.Provider value={value}>
      <Component {...pageProps} />
    </MenuContext.Provider>
  );
};

export default MyApp;
