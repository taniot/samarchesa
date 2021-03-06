import { FC } from 'react';
import { LayoutHome } from '../components';
import About from '../components/about/about.component';
import Products from '../components/products/products.component';
import { getProducts } from '../lib/graphcms/getProducts';
import { ProductType } from '../utils/types';

export const getStaticProps = async ({ locale = 'it' }: { locale: string }) => {
  const { products } = await getProducts(locale);

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
