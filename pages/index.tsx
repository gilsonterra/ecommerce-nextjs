import styles from "../styles/Index.module.css";
import ProductInlineCollection from "../components/Product/ProductInlineCollection";
import { fetchAll } from "../services/Product";
import { useEffect, useState } from "react";
import { Product } from "../types/Product";
import Layout from "../components/Layout/Layout";

interface HomeProps {
  products: Product[]
}

const Home = ({ products }: HomeProps) => {
  const [fashion, setFashion] = useState<Product[]>([]);
  const [red, setRed] = useState<Product[]>([]);

  useEffect(() => {
    fetchAll({ q: "fashion", total: 200 }).then((data) =>
      setFashion(data.products)
    );
    fetchAll({ q: "red", total: 200 }).then((data) => setRed(data.products));
  }, []);

  return (
    <Layout title="Ecommerce" description="Ecommerce NextJS by Gilson Terra">
    <div className={styles.container}>
      <main className={styles.main}>
        <ProductInlineCollection title="Novidades" right={
          <span className={styles.label}>Usando SSR - Server Side Render</span>
        } products={products} />
        <ProductInlineCollection title="Moda" products={fashion} />
        <ProductInlineCollection title="Acessórios" products={red} />
      </main>
    </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const response = await fetchAll({ total: 200 });
  return { props: { products: response.products.slice(0, 15) } }
}

export default Home;
