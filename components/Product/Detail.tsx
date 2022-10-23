import Image from "next/image";
import { Product } from "../../types/Product";
import styles from "components/Product/Detail.module.css";
import { addCart, selectTotalByProduct } from "../../store/cartSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import Rating from "../../components/Product/Rating";
import { motion } from "framer-motion";
import Brand from "./Brand";

const Detail = (product: Product) => {
  const dispatch = useAppDispatch();
  const totalProducts = useAppSelector((state) =>
    selectTotalByProduct(state, product)
  );

  const handleAddCart = () => {
    dispatch(addCart(product));
  };

  return (
    <motion.div
      initial={{ y: -10, opacity: 0.3 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.3 }}
      className={styles.container}
    >
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
          <Brand value={product.brand} />
          <Rating value={product.rating} />
        </div>
        <p>{product.description}</p>
        <p>
          Categoria: <b>{product.category}</b>
        </p>
        <p>
          Estoque: <b>{product.stock}</b>
        </p>
        <div className={styles.containerPrice}>
          <span className={styles.percent}>
            - {product.discountPercentage}%
          </span>
          <div className={styles.discount}>
            <del>
              R$
              {product.price +
                product.price * (product.discountPercentage / 100)}
            </del>
            <span>({product.discountPercentage}% de desconto)</span>
          </div>
          <span className={styles.price}>R$ {product.price}</span>
          <div className={styles.containerButton}>
            {totalProducts > product.stock ? (
              <span className={styles.sold}>Esgotado</span>
            ) : (
              <button className={styles.button} onClick={handleAddCart}>
                Comprar
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Detail;
