import styles from "./Header.module.css";

interface HeaderProps {
  top?: JSX.Element;
  children?: JSX.Element;
}

const Header = ({ children, top }: HeaderProps) => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.top}>
          <h1>Ecommerce</h1>
          {top}
        </div>
        {children}
      </div>
    </div>
  );
};

export default Header;
