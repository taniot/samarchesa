import Block from '../block/block.component';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import styles from './claim.module.scss';

const Claim = () => {
  const isSmall = useMediaQuery('(max-width: 1024px)');
  return (
    <div className={styles.claimContainer}>
      <div className={styles.claim}>
        {isSmall ? (
          <ul className={styles.mobile}>
            <li>Fiore Sardo</li>
            <li>Pecorini</li>
            <li>Latte crudo</li>
            <li>Naturali</li>
          </ul>
        ) : (
          <ul className={styles.desktop}>
            <li>Fiore Sardo e pecorini</li>
            <li>a latte crudo e naturali</li>
          </ul>
        )}
        <Block />
      </div>

      <p className={styles.subClaim}>
        Azienda Agricola del Pastore Giuseppe Cugusi
      </p>
    </div>
  );
};

export default Claim;
