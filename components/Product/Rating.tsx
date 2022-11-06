import Image from "next/image";
import styles from "components/Product/Rating.module.css";

interface RatingProps {
  value: number;
  size?: number;
  className?: string;
}

const Rating = ({ value, size= 20, className }: RatingProps) => {
  return (
    <div className={`${styles.rating} ${className}`}>
      <Image
        className={styles.image}
        src="/star.svg"
        alt="Avaliação"
        width={size}
        height={size}
      />
      <label>{value}</label>
    </div>
  );
};

export default Rating;
