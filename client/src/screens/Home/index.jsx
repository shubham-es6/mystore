import axios from "axios";
import { useState, useEffect } from "react";

import ProductCard from "@components/ProductCard";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const featchProducts = async () => {
      const { data } = await axios.get(`/api/v1/products`);

      setProducts(data);
    };
    featchProducts();
  }, []);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-3 py-10 sm:px-4">
        <h1 className="text-2xl font-bold text-slate-900">Latest Products</h1>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((prod) => (
            <ProductCard key={prod._id} product={prod} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeScreen;
