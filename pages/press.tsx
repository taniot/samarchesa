import { FC } from 'react';
import Header from '../components/header/header.component';
import { gql, GraphQLClient } from 'graphql-request';
import LayoutDefault from '../components/layout/LayoutDefault.component';
import TitleSection from '../components/titleSection/titleSection.component';
import Masonry from 'react-masonry-css';
import Image from 'next/image';
import { motion } from 'framer-motion';
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
    //revalidate: 60, // In seconds
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

const Home: FC<Props> = ({ page }) => {
  const { title, subtitle, images } = page || {};
  console.log(page);
  return (
    <LayoutDefault>
      <Header stuck={false} />
      <div>
        <TitleSection title={title} subtitle={`"${subtitle}"`} />
        <div className='container  mx-auto md:mb-10'>
          <Masonry
            className='flex animate-slide-fwd gap-10'
            breakpointCols={breakpointObj}
          >
            {images?.map((image: any) => {
              return (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className='hover:shadow-lg relative w-auto md:rounded-lg overflow-hidden  transition-all duration-500 ease-in-out md:mb-10'
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
        </div>
      </div>
    </LayoutDefault>
  );
};

export default Home;
