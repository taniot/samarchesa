import { FC } from 'react';
import Product from '../product/product.component';
import { ProductType } from '../../utils/types';
import TitleSection from '../titleSection/titleSection.component';
import styles from './products.module.scss';

interface Props {
  products: ProductType[];
}

const Products: FC<Props> = ({ products }) => {
  return (
    <section id='formaggi' className={styles.productsWrapper}>
      <TitleSection
        title={'Formaggi'}
        subtitle={'"Parola d\'ordine, qualità"'}
      />
      {products?.map((product, idx) => (
        <Product key={idx} product={product} />
      ))}
    </section>
  );
};

export default Products;
