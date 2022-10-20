import Image from "next/image";
import { Product } from "../../types/Product";
import styles from "components/Product/Detail.module.css";

const Detail = (product: Product) => {
  const addCart = () => {
    console.log("add");
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerImage}>
        <Image
          loader={() => product.thumbnail}
          src="product.png"
          alt={product.description}
          width="800"
          height="660"
        />
      </div>
      <div className={styles.containerDetail}>
        <div>
          <h1>{product.title}</h1>
        </div>
        <div className={styles.containerTitle}>
          <span className={styles.brand}>{product.brand}</span>
          <div className={styles.rating}>
            <Image
              className={styles.image}
              src="/star.svg"
              alt="Avalição"
              width={20}
              height={20}
            />
            <label>{product.rating}</label>
          </div>
        </div>
        <p>{product.description}</p>
        <div className={styles.containerPrice}>
          <span className={styles.percent}>
            - {product.discountPercentage}%
          </span>
          <span className={styles.price}>R$ {product.price}</span>
        </div>
        <button className={styles.button} onClick={addCart}>
          Comprar
        </button>
      </div>
    </div>
  );
};

export default Detail;
