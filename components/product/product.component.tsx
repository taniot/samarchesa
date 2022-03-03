import { ProductType } from '../../utils/types';
import SliderImages from '../slider/slider.component';
import Block from '../block/block.component';
import styles from './product.module.scss';
import { motion } from 'framer-motion';
const Product = ({ product }: { product: ProductType }) => {
  const { description, productName, shortDescription, images, color } = product;

  return (
    <div className={styles.productWrapper}>
      <div className={styles.images}>
        <SliderImages images={images} />
      </div>
      <div className={styles.body}>
        <div className={styles.header}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className={styles.block}
            style={{ backgroundColor: color.hex }}
          />
          <h2>{productName}</h2>
        </div>
        <h3>{shortDescription}</h3>
        <div
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: description.html }}
        ></div>
      </div>
      <div className={styles.blockContainer}>
        <Block />
      </div>
    </div>
  );
};

export default Product;

export const MyComponent = () => (
  <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} />
);
