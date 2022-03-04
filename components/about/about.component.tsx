import TitleSection from '../titleSection/titleSection.component';
import styles from './about.module.scss';
import { BsPlayCircle } from 'react-icons/bs';

const About = () => {
  return (
    <section id='giuseppe-cugusi' className={styles.aboutWrapper}>
      <TitleSection
        title={'Giuseppe Cugusi'}
        subtitle={'"Io mi voglio pastore"'}
      />
      <div className={styles.bodyContainer}>
        <div className={styles.image}>
          <video autoPlay muted loop playsInline id='about-video'>
            <source src='/video/giuseppecugusi.mp4' type='video/mp4' />
          </video>
        </div>
        <div className={styles.text}>
          <p className={styles.big}>Sa Marchesa è Giuseppe Cugusi.</p>
          <p className={styles.medium}>
            {`Della campagna conosce ogni sfumatura, ogni odore. Da suo padre
            pastore ha ereditato l'amore per questa terra sarda che, sotto la
            scorza dura, nasconde grande generosità. I suoi formaggi la
            rappresentano magnificamente. Basta assaggiarne una scheggia, e la
            bocca si insapora di mirto, lentisco, mentuccia selvatica. È come
            mordere la macchia mediterranea.`}
          </p>
          <div className={styles.linkIconContainer}>
            <BsPlayCircle className={styles.videoIcon} />
            <a
              className={styles.videoLink}
              href='https://www.youtube.com/watch?v=kmEvol2uZPQ'
              target='_blank'
              rel='noopener noreferrer'
            >
              Guarda {`"Io mi voglio Pastore"`}
            </a>
          </div>
        </div>
      </div>

      <div className={styles.textContainer}>
        <div className={styles.textBody}>
          <p>
            {` Nel suo ovile di Tanca Sa Marchesa, a Fordongianus, nel Barigadu al
            confine con le terme romane dell'Imperatore Traiano, Giuseppe Cugusi
            cura le sue pecore da trentacinque anni. Le conosce una ad una, le
            ama e loro ricambiano. Sono pecore felici, qui i pascoli alti,
            attraversati dalle acque limpide e impetuose del torrente Latzone,
            sfiorano davvero il paradiso. Un mare verde di 140 ettari, a sud
            dello sfondo della catena del Grighine, a nord i monti di Bortigali
            e Bolotana. La casa colonica, ai piedi dell'altura, è diventata il
            laboratorio, la fucina dove Giuseppe Cugusi da forma al latte e lo
            fa diventare <strong>Barigàdu</strong>, <strong>Lazzone</strong>,{' '}
            <strong>Sa Marchesa</strong>, <strong>Foz'e Murta</strong>,{' '}
            <strong>Barone</strong>, <strong>Fiore Sardo DOP</strong>, secondo
            l'uso barbaricino che vuole la lavorazione del formaggio nel luogo
            dove le pecore vivono e vengono munte. Le sue sono mani sante che si
            tuffano nel bianco e, eseguendo gesti antichi di secoli, creano
            pezzi unici come il Fiore Sardo DOP.`}
          </p>
          <p>
            {`Giuseppe è un uomo antico, bello e forte. Laura, sua moglie, è una
            donna bella, moderna e imprenditrice nata. Insieme, dieci anni fa,
            consapevoli del valore del loro formaggio, hanno deciso di
            diversificare la produzione, e oltre al Fiore Sardo hanno
            sperimentato altre linee di prodotto. Parola d'ordine, qualità. I
            clienti hanno molto apprezzato e così Laura ha scelto di
            interrompere la vendita a industriali e grossisti per dedicarsi al
            circuito di ristoranti, enoteche e punti vendita, anche piccoli, che
            sapessero amare quelle forme.`}
          </p>
          <div className='absolute w-3 h-3 bg-gray-light right-0 bottom-0' />
        </div>
      </div>
    </section>
  );
};

export default About;
