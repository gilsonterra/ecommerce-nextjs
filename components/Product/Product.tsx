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
  
  const formattedReal = (value: number) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  const priceFormatted = (price: number, discountPercentage: number): string =>
    formattedReal(price + price * (discountPercentage / 100));

  return (
    <motion.li
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.3 }}
      className={`${style.card} hover:bg-purple-300 hover:scale-105`}
    >
      <div className={style.thumbnail}>
        <Image
          src={thumbnail}
          alt={description}
          placeholder="blur"
          layout="fill"
          blurDataURL="https://dummyjson.com/image/i/products/41/thumbnail.webp"
        />
      </div>
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
            {priceFormatted(price, discountPercentage)}
          </del>
          <span className={style.priceDiscount}>{formattedReal(price)}</span>
        </div>
        <Link href={`/detail/${id}`}>
          <a className={style.link}>Ver Detalhes</a>
        </Link>
      </div>
    </motion.li>
  );
};

export default Product;
