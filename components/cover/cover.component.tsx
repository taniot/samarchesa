import { useRouter } from 'next/router';
import { useRef, useState, useEffect } from 'react';
import Brand, { BrandType } from '../brand/brand.component';
import Claim from '../claim/claim.component';
import styles from './cover.module.scss';
import Header from '../header/header.component';
import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const covers = [
  '/cover/01.jpg',
  '/cover/02.jpg',
  '/cover/03.jpg',
  '/cover/04.jpg',
];

const Cover = () => {
  const [showHeader, setShowHeader] = useState<boolean>(false);
  const [cover, setCover] = useState<string>('/cover/DSC_9663_00001.png');
  const coverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  useEffect(() => {
    setCover(covers[Math.floor(Math.random() * covers.length)]);
  }, []);

  function checkScroll() {
    const coverHeight = coverRef?.current?.clientHeight || 0;
    window.scrollY >= coverHeight ? setShowHeader(true) : setShowHeader(false);
  }

  const router = useRouter();
  return (
    <>
      <div ref={coverRef} className={styles.coverContainer}>
        <div className={styles.videoContainer}>
          <Image src={cover} layout='fill' className={styles.video} />
        </div>
        <div className={styles.claimContainer}>
          <Brand type={BrandType.LARGE} />
          <Claim />

          <div className={styles.menuContainer}>
            <span
              className={styles.mouseScroller}
              onClick={() =>
                router.push('/#about', undefined, { shallow: true })
              }
            >
              <span className={styles.mouseScrollerInside}></span>
            </span>
          </div>
        </div>
      </div>
      <AnimatePresence>{showHeader && <Header stuck={true} />}</AnimatePresence>
    </>
  );
};

export default Cover;
