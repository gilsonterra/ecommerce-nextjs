import styles from "./Cart.module.css";
import Image from "next/image";
import { useAppSelector } from "../../store/hooks";
import { selectTotalProduct } from "../../store/cartSlice";

const Cart = () => {
  const totalProducts = useAppSelector(selectTotalProduct);

  return (
    <div className={styles.container}>
      <label className={styles.label}>Carrinho</label>
      <Image
        className={styles.image}
        src="/cart.svg"
        alt="Carrinho de compras"
        width={25}
        height={25}
      />
      {totalProducts > 0 && (
        <span className={styles.counter}>
          {totalProducts > 90 ? '+99' : totalProducts}
        </span>
      )}
    </div>
  );
};

export default Cart;
