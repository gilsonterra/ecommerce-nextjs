import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from 'next/router'
import { MouseEvent } from "react";

interface SidebarProps {
  onClose?: () => void;
  items?: string[];
}

const Sidebar = ({ onClose, items }: SidebarProps) => {
const router = useRouter()


  const onClickItem = (e: MouseEvent<HTMLButtonElement>, href: string) => {
    router.push(href);
    onClose && onClose();
  };

  return (
    <motion.div
      initial={{ x: -200, opacity: 0.5 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ ease: "easeOut" }}
      className="h-screen w-full z-10 absolute top-0 left-0 backdrop-blur-sm"
    >
      <div className="bg-purple-50 w-60 h-screen relative flex flex-col p-2">
        <button
          className="absolute right-0 top-2 translate-x-10"
          title="Fechar"
          onClick={onClose}
        >
          <Image src="/close.svg" width={40} height={40} />
        </button>
        <h2 className="text-2xl font-black text-purple-900 py-2 uppercase">
          Categorias
        </h2>
        <ul>
          {items?.map((item) => (
            <li
              key={item}
              className="py-1 text-gray-900 hover:text-purple-600 hover:font-semibold"
            >
              <button onClick={(event) => onClickItem(event, `/category/${item}`)} className="capitalize">
                {item.replaceAll("-", " ")}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default Sidebar;
