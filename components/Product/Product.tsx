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
      <div className="h-52 relative mb-4">
      {thumbnail ? (
        <Image
          src={thumbnail}
          alt={description}
          placeholder="blur"
          priority={true}
          layout="fill"
          className="object-scale-down"
          blurDataURL="https://dummyjson.com/image/i/products/13/thumbnail.webp"
        />
        ) : (
          <div className="animate-pulse flex justify-center items-center w-full h-full bg-gray-300 rounded dark:bg-gray-700">
            <svg
              className="w-12 h-12 text-gray-200"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 640 512"
            >
              <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
            </svg>
          </div>
        )}
      </div>
      <div>
        <label className={style.title}>
          {title ? (
            title
          ) : (
            <div className="animate-pulse h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-3"></div>
          )}
        </label>

        {brand ? (
          <Brand value={brand} />
        ) : (
          <div className="animate-pulse h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-40 mb-4"></div>
        )}
        <div className={style.content}>
          {description ? (
            <p>{description}</p>
          ) : (
            <p className="animate-pulse">
              <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2"></div>
              <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2"></div>
              <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-40 mb-2"></div>
            </p>
          )}
        </div>
      </div>
      {rating && <Rating value={rating} />}
      <div className={style.wrapper}>
        <div className={style.containerPrice}>
          <del className={style.price}>
            {price ? (
              priceFormatted(price, discountPercentage)
            ) : (
              <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-16 mb-2"></div>
            )}
          </del>
          <span className={style.priceDiscount}>
            {price ? (
              formattedReal(price)
            ) : (
              <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-20 mb-2"></div>
            )}
          </span>
        </div>
        <Link href={`/detail/${id}`}>
          <a className={style.link}>Ver Detalhes</a>
        </Link>
      </div>
    </motion.li>
  );
};

export default Product;
