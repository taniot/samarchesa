import { gql, GraphQLClient } from 'graphql-request';
import { FC } from 'react';
import { LayoutHome } from '../components';
import About from '../components/about/about.component';
import Products from '../components/products/products.component';
import { ProductType } from '../utils/types';

export const getStaticProps = async ({ locale }: { locale: string }) => {
  const endpoint: string = process.env.GRAPH_CMS_ENDPOINT as string;
  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: process.env.GRAPH_CMS_TOKEN as string,
    },
  });

  const query = gql`
    query getProducts($locales: [Locale!]!) {
      products(locales: $locales) {
        productName
        color {
          hex
        }
        shortDescription
        description {
          html
        }
        images {
          url
        }
      }
    }
  `;

  const variables: { locales: string[] } = {
    locales: [locale],
  };

  const data = await client.request(query, variables);
  const { products } = data;

  return {
    props: {
      products,
    },
    //revalidate: 60, // In seconds
  };
};

interface Props {
  products: ProductType[];
}

const Home: FC<Props> = ({ products }) => {
  return (
    <LayoutHome>
      <About />
      <Products products={products} />
    </LayoutHome>
  );
};

export default Home;
