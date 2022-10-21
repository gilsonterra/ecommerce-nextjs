import Head from "next/head";
import ProductCollection from "../components/Product/ProductCollection";
import { fetchAll } from "../services/Product";
import { useEffect, useState } from "react";
import { Product } from "../types/Product";
import { useRouter } from 'next/router'
import styles from 'styles/Search.module.css';

const Search = () => {
  const router = useRouter();
  const { q, title } = router.query;
  const search = q ? Array.isArray(q) ? q[0] : q : '';
  const name = title ? Array.isArray(title) ? title[0] : title : '';
  
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchAll({ q: search, total: 200 }).then((data) =>
      setProducts(data.products)
    );
  }, [search]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Ecommerce NextJS</title>
        <meta name="description" content="Ecommerce NextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.title}>{ name }</div>
        <ProductCollection
          title=""
          products={products}
          type="grid"
        />
      </main>
    </div>
  );
};

export default Search;
