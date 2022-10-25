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
  const formattedReal = (value: number) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);

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
        <motion.h1
          initial={{ y: 20, opacity: 0.3 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          {product.title}
        </motion.h1>
        <motion.div
          initial={{ y: 20, opacity: 0.3 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.8 }}
          className={styles.containerTitle}
        >
          <Brand value={product.brand} />
          <Rating value={product.rating} />
        </motion.div>
        <motion.p
          initial={{ y: 20, opacity: 0.3 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.6 }}
        >
          {product.description}
        </motion.p>
        <motion.p
          initial={{ y: 20, opacity: 0.3 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.8 }}
        >
          Categoria: <b>{product.category}</b>
        </motion.p>
        <motion.p
          initial={{ y: 20, opacity: 0.3 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.8 }}
        >
          Estoque: <b>{product.stock}</b>
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0.3 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.6 }}
          className={styles.containerPrice}
        >
          <span className={styles.percent}>
            - {product.discountPercentage}%
          </span>
          <div className={styles.discount}>
            <del>
              {formattedReal(
                product.price +
                  product.price * (product.discountPercentage / 100)
              )}
            </del>
            <span>({product.discountPercentage}% de desconto)</span>
          </div>
          <span className={styles.price}>{formattedReal(product.price)}</span>
          <motion.div
            className={styles.containerButton}
            initial={{ y: 20, opacity: 0.3 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.6 }}
          >
            {totalProducts > product.stock ? (
              <span className={styles.sold}>Esgotado</span>
            ) : (
              <button className={styles.button} onClick={handleAddCart}>
                Comprar
              </button>
            )}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Detail;
