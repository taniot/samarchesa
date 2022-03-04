import { FC, useCallback, useState } from 'react';
import Header from '../components/header/header.component';
import { gql, GraphQLClient } from 'graphql-request';
import LayoutDefault from '../components/layout/LayoutDefault.component';
import TitleSection from '../components/titleSection/titleSection.component';
import Image from 'next/image';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useMediaQuery } from '../hooks/useMediaQuery';
import styles from '../styles/press.module.scss';

const LightGallery = dynamic(() => import('lightgallery/react'), {
  ssr: false,
});

export const getStaticProps = async ({ locale }: { locale: string }) => {
  const endpoint: string = process.env.GRAPH_CMS_ENDPOINT as string;
  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: process.env.GRAPH_CMS_TOKEN as string,
    },
  });

  const query = gql`
    query getPage($locales: [Locale!]!, $id: ID) {
      page(where: { id: $id }, locales: $locales) {
        title
        subtitle
        images {
          id
          url
          mimeType
          locale
          fileName
          height
          width
        }
      }
    }
  `;

  const variables: { locales: string[]; id: string } = {
    locales: [locale],
    id: 'cl0aruola2lh70cxqs7ttvfur',
  };

  const data = await client.request(query, variables);
  const { page } = data || {};

  return {
    props: {
      page,
    },
    revalidate: 60, // In seconds
  };
};

interface Props {
  page: any;
}

const PressPage: FC<Props> = ({ page }) => {
  const { title, subtitle, images } = page || {};
  const isSmall = useMediaQuery('(max-width: 640px)');
  const galleryClass = isSmall ? 'gallery-item' : '';

  return (
    <LayoutDefault>
      <Header stuck={false} />
      <div className='pt-10'>
        <TitleSection title={title} subtitle={`"${subtitle}"`} />
        <div className={styles.galleryContainer}>
          <LightGallery selector='.gallery-item'>
            {images?.map((image: any, idx: number) => {
              return (
                <motion.figure
                  key={idx}
                  data-src={image.url}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className={`gallery-item`}
                >
                  <Image
                    src={image.url}
                    layout='responsive'
                    width={image.width}
                    height={image.height}
                    alt=''
                  />
                </motion.figure>
              );
            })}
          </LightGallery>
        </div>
      </div>
    </LayoutDefault>
  );
};

export default PressPage;
