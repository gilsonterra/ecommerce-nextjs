import ProductGrid from "../../components/Product/ProductGrid";
import { fetchByCategory, fetchAll } from "../../services/Product";
import { useEffect, useState } from "react";
import { Product } from "../../types/Product";
import { useRouter } from "next/router";
import styles from "styles/Category.module.css";
import Layout from "../../components/Layout/Layout";
import { motion } from "framer-motion";

const Category = () => {
  const router = useRouter();
  const { name } = router.query;
  const category = name ? (Array.isArray(name) ? name[0] : name) : "";

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (!category) return;

    fetchByCategory(category).then((data) => setProducts(data.products));
  }, [category]);

  return (
    <Layout title={category} description={category}>
      <main className="flex flex-col justify-center items-center">
        <div className="bg-purple-900 w-full text-4xl tracking-wider uppercase flex justify-center align-middle p-10 text-white">
          <motion.div
            key={category}
            initial={{ y: 20, opacity: 0.3 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.6 }}
          >
            {category.replaceAll("-", " ")}
          </motion.div>
        </div>
        <div className="max-w-screen-xl w-full">
          <ProductGrid products={products} />
        </div>
      </main>
    </Layout>
  );
};

export default Category;
