import Link from "next/link";
import styles from "./Navbar.module.css";
import { useRouter } from 'next/router'

const Navbar = () => {
  const router = useRouter();
  const isActive = (route: string) => encodeURI(route) === router.asPath ? styles.active : '';
  const urlEletronicos = "/search?q=phone&title=Eletrônicos";
  const urlModa = "/search?q=fashion&title=Moda";
  const urlAcessorios  = "/search?q=red&title=Acessórios";

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">
            <a className={isActive('/')}>Home</a>
          </Link>
        </li>
        <li>
          <Link href={urlEletronicos}>
            <a className={isActive(urlEletronicos)}>Eletrônicos</a>
          </Link>
        </li>
        <li>
          <Link href={urlModa}>
            <a className={isActive(urlModa)}>Moda</a>
          </Link>
        </li>
        <li>
          <Link href={urlAcessorios}>
            <a className={isActive(urlAcessorios)}>Acessórios</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
