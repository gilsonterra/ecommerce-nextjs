import Head from "next/head";
import { fetchById } from "../../services/Product";
import { Product } from "../../types/Product";
import styles from "styles/Detail.module.css";
import ProductDetail from "../../components/Product/Detail";
import Link from "next/link";
import Image from "next/image";

interface DetailProps {
  product: Product;
}

const Detail = ({ product }: DetailProps) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ecommerce NextJS</title>
        <meta name="description" content="Ecommerce NextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Link href="/">
          <a className={styles.back}>
            <Image
              className={styles.image}
              src="/back.svg"
              alt="Voltar"
              width={15}
              height={15}
            />{" "}
            Voltar
          </a>
        </Link>
        <ProductDetail {...product} />
      </main>
    </div>
  );
};

export async function getServerSideProps({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;
  const uid = id ? (Array.isArray(id) ? id[0] : id) : "";

  const product = await fetchById(uid);
  return { props: { product } };
}

export default Detail;
