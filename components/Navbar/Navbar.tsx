import Link from "next/link";
import styles from "./Navbar.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fetchCategories } from "../../services/Product";

const Navbar = () => {
  const router = useRouter();

  const isActive = (category: string) =>
    router.asPath === `/category/${category}` ? styles.active : "";

  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    fetchCategories().then((data) => setCategories(data.slice(0, 9)));
  }, []);

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">
            <a className={isActive("/")}>Home</a>
          </Link>
        </li>
        {categories.map((item) => (
          <li key={item}>
            <Link href={`/category/${item}`}>
              <a className={isActive(item)}>{item.replaceAll('-', ' ')}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
