import { useEffect, useMemo, useState } from "react";
import fetchAll from "../../services/Product";
import { Pagination } from "../../types/Pagination";
import { Product } from "../../types/Product";
import ProductItem from "./Product";
import style from "./ProductCollection.module.css";

interface PaginationCollection {
  title: string;
  pagination?: Pagination;
}

const ProductCollection = ({ title, pagination }: PaginationCollection) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchAll(pagination).then((data) => setProducts(data.products));
  }, [pagination]);

  return (
    <section className={style.section}>
      <h1 className={style.title}>{title}</h1>
      <ul className={style.cards}>
        {products.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </ul>
    </section>
  );
};

export default ProductCollection;
