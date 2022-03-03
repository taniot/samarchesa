import Brand from '../brand/brand.component';
import styles from './footer.module.scss';
import { BrandType } from '../brand/brand.component';
import { BsWhatsapp, BsInstagram } from 'react-icons/bs';
import { GoHeart } from 'react-icons/go';
import Contacts from '../contacts/contacts.component';

const footerData = {
  title: 'Sa Marchesa',
  description: "Sa Marchesa è l'azienda agricola del pastore Giuseppe Cugusi",
  author: 'Gaetano Frascolla',
  email: 'samarchesa2.0@gmail.com',
  phone_a: '+39 328 60 27 607',
  phone_b: '+39 328 90 97 404',
  ragione_sociale: 'Azienda agricola del Pastore Giuseppe Cugusi',
  indirizzo: 'Località Tanca Sa Marchesa, Fordongianus',
  sede_legale: 'Via Cagliari 59, 08020 Gavoi (NU)',
  vat: '00556140911',
  cf: 'CGSGPP60R27D947E',
  social: [
    {
      name: 'whatsapp',
      type: 'whatsapp',
      link: 'https://api.whatsapp.com/send?phone=+39 328 60 27 607',
    },
    {
      name: 'formaggisamarchesa',
      type: 'instagram',
      link: 'https://www.instagram.com/formaggisamarchesa/',
    },
  ],
};

const Footer = () => {
  const {
    ragione_sociale,
    indirizzo,
    sede_legale,
    vat,
    cf,
    phone_a,
    phone_b,
    email,
  } = footerData;
  return (
    <footer className={styles.footerWrapper}>
      <Contacts />
      <div className={styles.containerWrapper}>
        <div className={styles.brandWrapper}>
          <Brand type={BrandType.MEDIUM} />
        </div>
        <div className={styles.infoWrapper}>
          <ul>
            <li>
              <p>{ragione_sociale}</p>
              <span className={styles.sep}>-</span>
              <p>{indirizzo}</p>
            </li>
            <li>
              <p>Sede legale: {sede_legale}</p>
              <span className={styles.sep}>-</span>
              <p>P.IVA {vat}</p>
              <span className={styles.sep}>-</span>
              <p>CF. {cf}</p>
            </li>
            <li>
              <p>
                <span className={styles.label}>Tel.</span>
                <a href={`tel:${phone_a}`}>{phone_a}</a>
                <span className={styles.sep}>o</span>
                <a href={`tel:${phone_b}`}>{phone_b}</a>
              </p>
              <span className={styles.sep}>-</span>
              <p>
                <span className={styles.label}>email:</span>
                <a href={`mailto:${email}`}>{email}</a>
              </p>
            </li>
            <li>
              <p className='cookie'>
                © {new Date().getFullYear()}
                <span className={styles.sep}>-</span> Sa Marchesa
              </p>
            </li>
          </ul>
        </div>
        <div className={styles.socialWrapper}>
          <div className={styles.socialContainer}>
            <a
              href={`https://api.whatsapp.com/send?phone=+39 328 60 27 607`}
              title='whatsapp'
              target='_blank'
              rel='noopener noreferrer'
            >
              <BsWhatsapp className={styles.whatsappIcon} />
            </a>
            <a
              href='https://www.instagram.com/formaggisamarchesa/'
              title='instagram'
              target='_blank'
              rel='noopener noreferrer'
            >
              <BsInstagram className={styles.instagramIcon} />
            </a>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center pt-10 pb-10'>
        <p className='items-center text-logo text-sm'>
          <a
            href='https://taniot.net/'
            target='_blank'
            rel='noopener noreferrer'
          >
            handmade with <GoHeart className={styles.loveIcon} /> by taniot
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
