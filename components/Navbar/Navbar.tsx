import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fetchCategories } from "../../services/Product";
import useWindowDimension from '../../hooks/useWindowDimension';

const Navbar = () => {
  const router = useRouter();
  const { width } = useWindowDimension();

  const isActive = (category: string) =>
    router.asPath === `/category/${category}` ? 'bg-purple-900' : "";

  const [categories, setCategories] = useState<string[]>([]);
  const categoriesSlice = width <= 425 ? 2 : width <= 768 ? 5 : width <= 1440 ? 6 : 10;
  const categoriesFiltered = categories.slice(0, categoriesSlice);

  console.log('kkk', width);


  useEffect(() => {
    fetchCategories().then((data) => setCategories(data));
  }, []);


  return (
    <nav className="py-4">
      <ul className="list-none flex gap-3">
        <li>
          <Link href="/">
            <a className={`p-3 hover:bg-purple-500 text-white ${router.asPath === '/' && 'bg-purple-500'}`}>Home</a>
          </Link>
        </li>
        {categoriesFiltered.map((item) => (
          <li key={item} className="hover:-translate-y-1 transition ease-in duration-100">
            <Link href={`/category/${item}`}>
              <a className={ `capitalize p-3 rounded-md text-white  hover:bg-purple-500 ${isActive(item)}`}>
                {item.replaceAll('-', ' ')}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
