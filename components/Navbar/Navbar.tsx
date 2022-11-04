import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fetchCategories } from "../../services/Product";
import useWindowDimension from "../../hooks/useWindowDimension";
import Image from "next/image";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const router = useRouter();
  const { width } = useWindowDimension();

  const isActive = (category: string) =>
    router.asPath === `/category/${category}` ? "bg-purple-900" : "";

  const [showSidebar, setShowSidebar] = useState(false);

  const [categories, setCategories] = useState<string[]>([]);
  const categoriesSlice =
    width <= 425 ? 2 : width <= 768 ? 5 : width <= 1440 ? 6 : 10;
  const categoriesFiltered = categories.slice(0, categoriesSlice);

  const handleShowSidebar = () => setShowSidebar(!showSidebar);

  useEffect(() => {
    fetchCategories().then((data) => setCategories(data));
  }, []);

  return (
    <nav className="py-4">
      {showSidebar && (
        <Sidebar onClose={handleShowSidebar} items={categories} />
      )}
      <ul className="list-none flex gap-3">
        <li className="-translate-y-1 transition ease-in duration-100">
          <button
            className="capitalize rounded-md text-white m-0 p-1 flex justify-center items-center hover:bg-purple-500"
            onClick={handleShowSidebar}
          >
            <Image src="/menu.svg" alt="Menu" width={20} height={20} />
            <span className="ml-2">Todos</span>
          </button>
        </li>
        {categoriesFiltered.map((item) => (
          <li
            key={item}
            className="hover:-translate-y-1 transition ease-in duration-100"
          >
            <Link href={`/category/${item}`}>
              <a
                className={`capitalize p-3 rounded-md text-white  hover:bg-purple-500 ${isActive(
                  item
                )}`}
              >
                {item.replaceAll("-", " ")}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
