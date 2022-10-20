import Image from "next/image";
import { Product } from "../../types/Product";
import style from "./Product.module.css";

const Product = ({ thumbnail, description, price, title}: Product) => {
  return (
     <li className={style.card}>
      <Image
        loader={() => thumbnail}
        src="product.png"
        alt={description}
        width="500"
        height="260"
      />
     <div>
       <h3 className={style.title}>{ title }</h3>
       <div className={style.content}>
         <p>{ description }</p>
       </div>
     </div>
     <div className={style.wrapper}>
      <span className={style.price}>R$ {price}</span>
       <a href="" className={style.link}>
         Ver Detalhes
       </a>
     </div>
   </li>
  );
};

export default Product;
