import Link from "next/link";
import styles from "./Navbar.module.css";
import { useRouter } from 'next/router'

const Navbar = () => {
  const router = useRouter();

  // console.log(router);

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/home">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className={styles.active}>Index</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
