import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Index.module.css";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Cart from "../components/Header/Cart";
import ProductCollection from "../components/Product/ProductCollection";

const Home: NextPage = () => {
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
        <ProductCollection
          title="Eletronicos"
          pagination={{ q: "phone", total: 200 }}
        />
        <ProductCollection
          title="Moda"
          pagination={{ q: "fashion", total: 200 }}
        />
        <ProductCollection
          title="Acessórios"
          pagination={{ q: "red", total: 200 }}
        />
      </main>
    </div>
  );
};

export default Home;
