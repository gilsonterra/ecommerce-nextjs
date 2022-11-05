import ProductGrid from "../../components/Product/ProductGrid";
import { fetchByCategory, fetchAll } from "../../services/Product";
import { useEffect, useState } from "react";
import { Product } from "../../types/Product";
import { useRouter } from "next/router";
import styles from "styles/Category.module.css";
import Layout from "../../components/Layout/Layout";
import { motion } from "framer-motion";
import Image from "next/image";

const Category = () => {
  const router = useRouter();
  const { name } = router.query;
  const categoryId = name ? (Array.isArray(name) ? name[0] : name) : "";
  const category = categoryId.replaceAll("-", " ");
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (!category) return;
    
    const fakeProduct = {} as Product;
    setProducts(Array(8).fill(fakeProduct)); // fake skeleton

    setLoading(true);

    fetchByCategory(category).then((data) => {
      setProducts(data.products)
      setLoading(false);
    });
  }, [category]);

  return (
    <Layout title={category.toUpperCase()} description={category}>
      <main className="flex flex-col justify-center items-center">
        <div className="bg-purple-900 w-full text-4xl tracking-wider uppercase flex justify-center align-middle p-10 text-white">
          <motion.div
            key={categoryId}
            initial={{ y: 20, opacity: 0.3 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.6 }}
          >
            {category}
          </motion.div>
        </div>
        <div className="max-w-screen-xl w-full">
          {loading ? (
             <ProductGrid products={products} />
          ) : products.length <= 0 ? (
            <div className="flex items-center justify-center p-10 text-2xl">
              <Image src="/sad.svg" height={50} width={50} />
              <span className="ml-2">
                Nenhum produto encontrado nessa categoria!
              </span>
            </div>
          ) : (
            <ProductGrid products={products} />
          )}
        </div>
      </main>
    </Layout>
  );
};

export default Category;
