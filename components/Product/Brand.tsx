import styles from 'components/Product/Brand.module.css';

interface BrandProps {
  value: string;
}

const Brand = ({ value }: BrandProps) => {
  return <span className={styles.brand}>{value}</span>;
};

export default Brand;
