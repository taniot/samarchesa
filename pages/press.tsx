import { FC, useCallback, useState } from 'react';
import Header from '../components/header/header.component';
import { gql, GraphQLClient } from 'graphql-request';
import LayoutDefault from '../components/layout/LayoutDefault.component';
import TitleSection from '../components/titleSection/titleSection.component';
import Masonry from 'react-masonry-css';
import Image from 'next/image';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

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

const breakpointObj = {
  default: 4,
  3000: 3,
  2000: 3,
  1200: 2,
  1000: 1,
  500: 1,
};

const PressPage: FC<Props> = ({ page }) => {
  const { title, subtitle, images } = page || {};

  return (
    <LayoutDefault>
      <Header stuck={false} />
      <div className='pt-10'>
        <TitleSection title={title} subtitle={`"${subtitle}"`} />
        <div className='md:mx-20 md:mb-10'>
          <LightGallery selector='.gallery-item'>
            <Masonry
              className='flex animate-slide-fwd gap-10'
              breakpointCols={breakpointObj}
            >
              {images?.map((image: any, idx: number) => {
                return (
                  <motion.div
                    key={idx}
                    data-src={image.url}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className='gallery-item block hover:shadow-lg relative w-auto md:rounded-lg overflow-hidden  transition-all duration-500 ease-in-out md:mb-10'
                  >
                    <Image
                      src={image.url}
                      layout='responsive'
                      width={image.width}
                      height={image.height}
                      alt=''
                      className='hover:shadow-black'
                    />
                  </motion.div>
                );
              })}
            </Masonry>
          </LightGallery>
        </div>
      </div>
    </LayoutDefault>
  );
};

export default PressPage;
