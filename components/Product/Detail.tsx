import Image from "next/image";
import { Product } from "../../types/Product";
import styles from "components/Product/Detail.module.css";
import { addCart, selectTotalByProduct, selectTotalProduct } from "../../store/cartSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

const Detail = (product: Product) => {
  const dispatch = useAppDispatch();
  const totalProducts = useAppSelector((state) => selectTotalByProduct(state, product));

  const handleAddCart = () => {
    dispatch(addCart(product));
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
        {totalProducts > product.stock ? (
          <span className={styles.sold}>Esgotado</span>
        ) : (
          <button className={styles.button} onClick={handleAddCart}>
            Comprar
          </button>
        )}
      </div>
    </div>
  );
};

export default Detail;
