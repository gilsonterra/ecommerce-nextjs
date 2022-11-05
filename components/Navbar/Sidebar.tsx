import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { MouseEvent } from "react";

interface SidebarProps {
  onClose?: () => void;
  items?: string[];
}

const Sidebar = ({ onClose, items }: SidebarProps) => {
  const router = useRouter();

  const onClickItem = (e: MouseEvent<HTMLButtonElement>, href: string) => {
    router.push(href);
    onClose && onClose();
  };

  return (
    <motion.div
      initial={{ x: -200, opacity: 0.5 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ ease: "easeOut" }}
      className="w-full z-50 absolute top-0 left-0 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        className="absolute left-60 top-2"
        title="Fechar"
        onClick={onClose}
      >
        <Image src="/close.svg" width={40} height={40} />
      </button>
      <div className="bg-purple-50 h-screen w-60 relative flex flex-col p-2  overflow-y-auto overflow-x-hidden">
        <h2 className="text-2xl font-black text-purple-900 py-2 uppercase">
          Categorias
        </h2>
        <ul>
          {items?.map((item) => (
            <li
              key={item}
              className="py-2 text-gray-900 hover:text-purple-600 hover:font-semibold"
            >
              <button
                onClick={(event) => onClickItem(event, `/category/${item}`)}
                className="capitalize"
              >
                {item.replaceAll("-", " ")}
              </button>
            </li>
          ))}
        </ul>
        <span className="text-sm text-gray-900 pt-5 pb-2 font-light">Desenvolvido por @gilsonterra</span>
      </div>
    </motion.div>
  );
};

export default Sidebar;
