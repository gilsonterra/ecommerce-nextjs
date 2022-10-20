import { Product } from "../../types/Product";
import ProductItem from "./Product";
import style from "./ProductCollection.module.css";

interface PaginationCollection {
  title: string;
  products: Product[];
  type?: 'grid' | 'cards';
}

const ProductCollection = ({ title, products, type }: PaginationCollection) => {
  const typeStyle = type === 'grid' ? 'grid' : 'cards';

  return (
    <section>
      <h1 className={style.title}>{title} { title ? `(${products?.length || 0})` : '' }</h1>
      
      <ul className={style[typeStyle]}>
        {products?.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </ul>
    </section>
  );
};


export default ProductCollection;
