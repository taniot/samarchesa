import React from 'react';
import Head from 'next/head';
import Footer from '../footer/footer.component';

type Props = {
  title?: string;
  children?: JSX.Element[];
};

const defaultTitle =
  'Sa Marchesa - Fiore Sardo e pecorini a latte crudo e naturali';

const LayoutDefault = ({
  children,
  title = defaultTitle,
}: Props): JSX.Element => (
  <div className='layout-default'>
    <Head>
      <title>
        {title !== '' ? `{$title} | ${defaultTitle}` : defaultTitle}
      </title>
      <meta
        name='description'
        content={`Sa Marchesa è l'azienda agricola del pastore Giuseppe Cugusi, che produce Fiore Sardo e pecorini naturali a latte crudo nell'altipiano di Paulilatino, in Sardegna.`}
      />
      <link rel='icon' href='/favicon.png' />
    </Head>

    <main>{children}</main>
    <Footer />
  </div>
);

export default LayoutDefault;
