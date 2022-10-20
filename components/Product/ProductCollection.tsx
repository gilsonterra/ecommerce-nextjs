import { Product } from "../../types/Product";
import ProductItem from "./Product";
import style from "./ProductCollection.module.css";

interface PaginationCollection {
  title: string;
  products: Product[];
}

const ProductCollection = ({ title, products }: PaginationCollection) => {
  return (
    <section className={style.section}>
      <h1 className={style.title}>{title} ({ products?.length || 0 })</h1>
      
      <ul className={style.cards}>
        {products?.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </ul>
    </section>
  );
};


export default ProductCollection;
