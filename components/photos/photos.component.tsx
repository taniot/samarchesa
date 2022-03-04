import styles from './photos.module.scss';
import TitleSection from '../titleSection/titleSection.component';
import SliderImages from '../slider/slider.component';

type bePhoto = {
  id: string;
  url: string;
};

const Photos = ({ photos }: { photos: bePhoto[] }) => {
  return (
    <section id='photos' className={styles.photosWrapper}>
      <TitleSection
        title={'Scopri Sa Marchesa'}
        subtitle={'"Venite a trovarci"'}
      />
      <SliderImages images={photos} />
    </section>
  );
};

export default Photos;
