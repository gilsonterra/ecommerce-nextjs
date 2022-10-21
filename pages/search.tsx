import ProductCollection from "../components/Product/ProductCollection";
import { fetchAll } from "../services/Product";
import { useEffect, useState } from "react";
import { Product } from "../types/Product";
import { useRouter } from "next/router";
import styles from "styles/Search.module.css";
import Layout from "../components/Layout/Layout";

const Search = () => {
  const router = useRouter();
  const { q, title } = router.query;
  const search = q ? (Array.isArray(q) ? q[0] : q) : "";
  const name = title ? (Array.isArray(title) ? title[0] : title) : "";

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchAll({ q: search, total: 200 }).then((data) =>
      setProducts(data.products)
    );
  }, [search]);

  return (
    <Layout title={name} description={name}>
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.title}>{name}</div>
          <ProductCollection title="" products={products} type="grid" />
        </main>
      </div>
    </Layout>
  );
};

export default Search;
