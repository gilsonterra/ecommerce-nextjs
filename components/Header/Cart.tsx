import styles from "./Cart.module.css";
import Image from "next/image";

const Cart = () => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>Carrinho</label>
      <Image className={styles.image} src="/cart.svg" alt="Carrinho de compras" width={20} height={20} />
    </div>
  );
};

export default Cart;
