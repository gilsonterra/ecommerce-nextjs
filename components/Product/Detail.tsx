import Image from "next/image";
import { Product } from "../../types/Product";
import styles from "components/Product/Detail.module.css";
import { addCart, selectTotalByProduct } from "../../store/cartSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import Rating from "../../components/Product/Rating";
import { motion } from "framer-motion";
import Brand from "./Brand";
import { useState } from "react";

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

  const [imageSelected, setImageSelected] = useState(product.thumbnail);
  const handleSelectImage = (item: string) => {
    setImageSelected(item);
  };

  return (
    <motion.div
      initial={{ y: -10, opacity: 0.3 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.3 }}
      className="p-2 flex flex-row flex-wrap"
    >
      <div className="w-full md:w-2/3 p-2 flex justify-center items-start">
        <ul className="w-24 h-full mr-3 flex flex-col gap-2 items-stretch">
          {product.images.map((item) => (
            <li
              className="relative h-16 w-full border-2 rounded-lg overflow-hidden cursor-pointer"
              onMouseMove={() => handleSelectImage(item)}
            >
              <Image
                src={item}
                alt={item}
                placeholder="blur"
                blurDataURL={item}
                layout="fill"
                className="object-cover"
              />
            </li>
          ))}
        </ul>
        <div className="h-full w-full relative bg-gray-100 border-2 rounded">
          <Image
            src={imageSelected}
            alt={product.description}
            layout="fill"
            className="object-contain"
            placeholder="blur"
            blurDataURL={imageSelected}
          />
        </div>
      </div>
      <div className="w-full md:w-1/3 p-2 h-full">
        <motion.h1
          initial={{ y: 20, opacity: 0.3 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
          className="text-4xl font-black mb-3 capitalize text-purple-900"
        >
          {product.title}
        </motion.h1>
        <motion.div
          initial={{ y: 20, opacity: 0.3 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.8 }}
          className="flex justify-between mb-2"
        >
          <Brand value={product.brand} />
          <Rating value={product.rating} />
        </motion.div>
        <motion.p
          initial={{ y: 20, opacity: 0.3 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.6 }}
          className="py-2"
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
          className="border-2 mt-2 h-full p-2 flex flex-col items-center"
        >
          <span className="rounded bg-green-700 text-white px-2 py-1 inline-block">
            - {product.discountPercentage}%
          </span>
          <div className="text-gray-500 p-2">
            <del>
              {formattedReal(
                product.price +
                  product.price * (product.discountPercentage / 100)
              )}
            </del>
            <span>({product.discountPercentage}% de desconto)</span>
          </div>
          <span className="p-2 text-4xl font-black">
            {formattedReal(product.price)}
          </span>
          <motion.div
            className="w-full"
            initial={{ y: 20, opacity: 0.3 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.6 }}
          >
            {totalProducts > product.stock ? (
              <span className="text-lg">Esgotado</span>
            ) : (
              <button
                className="bg-purple-800 w-full text-white p-2 rounded-2xl uppercase text-2xl"
                onClick={handleAddCart}
              >
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
