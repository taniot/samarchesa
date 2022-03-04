import useEmblaCarousel from 'embla-carousel-react';
import { DotButton, NextButton, PrevButton } from './sliderButtons.component';
import Image from 'next/image';
import styles from './slider.module.scss';
import { useState, useCallback, useEffect } from 'react';

const SliderImages = ({ images }: { images: any }) => {
  const [viewportRef, embla] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  });

  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on('select', onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <>
      <div className={styles.embla}>
        <div className={styles.embla__viewport} ref={viewportRef}>
          <div className={styles.embla__container}>
            {images.map((img: { url: string }, idx: number) => {
              return (
                <div key={idx} className={styles.embla__slide}>
                  <div className={styles.embla__slide__inner}>
                    <Image
                      src={img.url}
                      layout='responsive'
                      width={1200}
                      height={880}
                      alt={`Image ${idx}`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.embla__dots}>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              selected={index === selectedIndex}
              onClick={() => scrollTo(index)}
              index={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SliderImages;
