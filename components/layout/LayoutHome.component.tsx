import React from 'react';
import Head from 'next/head';
import Footer from '../footer/footer.component';
import Cover from '../cover/cover.component';
import WhatsApp from '../whatsapp/whatsapp.component';

type Props = {
  title?: string;
  children?: JSX.Element[];
};

const defaultTitle =
  'Sa Marchesa - Fiore Sardo e pecorini a latte crudo e naturali';

const LayoutHome = ({ children, title }: Props): JSX.Element => (
  <div className='layout-home'>
    <Head>
      <title>{title ? `${title} | ${defaultTitle}` : defaultTitle}</title>
      <meta
        name='description'
        content={`Sa Marchesa è l'azienda agricola del pastore Giuseppe Cugusi, che produce Fiore Sardo e pecorini naturali a latte crudo nell'altipiano di Paulilatino, in Sardegna.`}
      />
      <link rel='canonical' href='https://samarchesa.com' />
      <link rel='icon' href='/favicon.png' />
    </Head>
    <WhatsApp />
    <Cover />
    <main>{children}</main>
    <Footer />
  </div>
);

export default LayoutHome;
