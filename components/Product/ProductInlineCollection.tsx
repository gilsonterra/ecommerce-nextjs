import { Product } from "../../types/Product";
import ProductItem from "./Product";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import style from "./ProductInlineCollection.module.css";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import Image from "next/image";

interface PaginationCollection {
  title: string;
  products: Product[];
  right?: JSX.Element;
}

const ProductCollection = ({
  title,
  products,
  right,
}: PaginationCollection) => {
  const valueToScroll = 300;
  const [width, setWidth] = useState(0);
  const carousel = useRef() as MutableRefObject<HTMLInputElement>;
  const x = useMotionValue(0);
  const animation = useAnimation();

  const handleClickLeft = () => {
    const positiveValue = x.get() * -1;
    const canMove = valueToScroll <= positiveValue;
    const newPosition = x.get() + valueToScroll
    canMove && animation.start({
      x: newPosition > 0 ? 0 : newPosition
    });
  };
  const handleClickRight = () => {
    const positiveValue = x.get() * -1;
    const canMove = positiveValue <= width;
    const newPosition = x.get() - valueToScroll
    canMove && animation.start({
      x: newPosition > width ? width : newPosition
    })
  };

  useEffect(() => {
    const width = carousel.current?.scrollWidth || 0;
    const offsetWidth = carousel.current?.offsetWidth || 0;
    setWidth(width - offsetWidth);

    animation.start({
      x: 0
    })
  }, [products]);

  return (
    <motion.section
      ref={carousel}
      whileTap={{ cursor: "grabbing" }}
      className={style.container}
    >
      <div className={style.containerTitle}>
        <h1 className={style.title}>
          {title} {title ? `(${products?.length || 0})` : ""}
        </h1>
        {right}
      </div>
      <motion.ul
        style={{ x: x }}
        drag="x"
        initial={{ x: -100 }}
        animate={animation}
        transition={{ duration: 0.7 }}
        dragConstraints={{ right: 0, left: -width }}
        className={style.grid}
        dragElastic={0.8}
      >
        {products?.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </motion.ul>
      <button
        className={`${style.control} ${style.left}`}
        onClick={handleClickLeft}
      >
        <Image
          className={style.image}
          src="/left.svg"
          alt="Anterior"
          width={30}
          height={30}
        />
      </button>
      <button
        className={`${style.control} ${style.right}`}
        onClick={handleClickRight}
      >
        <Image
          className={style.image}
          src="/right.svg"
          alt="Próximo"
          width={30}
          height={30}
        />
      </button>
    </motion.section>
  );
};

export default ProductCollection;
