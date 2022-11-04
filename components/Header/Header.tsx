import styles from "./Header.module.css";

interface HeaderProps {
  top?: JSX.Element;
  children?: JSX.Element;
}

const Header = ({ children, top }: HeaderProps) => {
  return (
    <div className="bg-purple-700 flex justify-center align-middle">
      <div className="flex flex-col w-full max-w-screen-xl">
        <div className="flex justify-between p-2">
          <h1 className={styles.title}>Lojinha</h1>
          {top}
        </div>
        {children}
      </div>
    </div>
  );
};

export default Header;
