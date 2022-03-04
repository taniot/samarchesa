import styles from './contacts.module.scss';

const Contacts = () => {
  return (
    <div id='contatti' className={styles.contactsWrapper}>
      <div className={styles.containerWrapper}>
        <h2>Siete interessati ai nostri formaggi?</h2>
        <p>
          Per ricevere informazioni o acquistare i formaggi Sa Marchesa potete
          chiamare o scrivere direttamente a Giuseppe.
        </p>
        <div className={styles.buttonsContainer}>
          <a
            href={`tel:+39 328 60 27 607`}
            className={styles.button}
            target='_blank'
            rel='noopener noreferrer'
            title='Chiama Giuseppe al +39 328 60 27 607'
          >
            Chiama
          </a>
          <a
            href={`mailto:samarchesa2.0@gmail.com`}
            className={styles.button}
            target='_blank'
            rel='noopener noreferrer'
            title='Scrivi a samarchesa2.0@gmail.com'
          >
            Scrivi
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
