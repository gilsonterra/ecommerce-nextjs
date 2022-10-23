import Image from "next/image";
import { Product } from "../../types/Product";
import style from "./Product.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import Brand from "./Brand";
import Rating from "./Rating";

const Product = ({
  thumbnail,
  description,
  price,
  discountPercentage,
  title,
  brand,
  rating,
  id,
}: Product) => {
  return (
    <motion.li
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.3 }}
      className={style.card}
    >
      <Image
        loader={() => thumbnail}
        src="product.png"
        alt={description}
        width="250"
        height="130"
        className={style.thumbnail}
      />
      <div>
        <h3 className={style.title}>{title}</h3>
        <Brand value={brand} />
        <div className={style.content}>
          <p>{description}</p>
        </div>
      </div>
      <Rating value={rating} />
      <div className={style.wrapper}>
        <div className={style.containerPrice}>
          <del className={style.price}>
            R$ {price + price * (discountPercentage / 100)}
          </del>
          <span className={style.priceDiscount}>R$ {price}</span>
        </div>
        <Link href={`/detail/${id}`}>
          <a className={style.link}>Ver Detalhes</a>
        </Link>
      </div>
    </motion.li>
  );
};

export default Product;
