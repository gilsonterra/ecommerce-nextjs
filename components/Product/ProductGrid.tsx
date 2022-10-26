import { Product } from "../../types/Product";
import style from 'components/Product/ProductGrid.module.css';
import ProductItem from "./Product";

interface ProductGridProps {
  products: Product[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <section className={style.container}>
      {products?.map((product) => (
        <ProductItem key={product.id} {...product} />
      ))}
    </section>
  );
};

export default ProductGrid;
