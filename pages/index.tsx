import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Index.module.css";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Cart from "../components/Header/Cart";
import ProductCollection from "../components/Product/ProductCollection";
import { fetchAll } from "../services/Product";
import { useEffect, useState } from "react";
import { Product } from "../types/Product";

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
    <div className={styles.container}>
      <Head>
        <title>Ecommerce NextJS</title>
        <meta name="description" content="Ecommerce NextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header top={<Cart />}>
        <Navbar />
      </Header>
      <main className={styles.main}>
        <br />
        <ProductCollection title="Eletronicos  *usando SSR" products={products} />
        <ProductCollection title="Moda" products={fashion} />
        <ProductCollection title="Acessórios" products={red} />
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetchAll({ q: "phone", total: 200 });
  return { props: { products: response.products } }
}

export default Home;
