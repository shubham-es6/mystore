import { useGetProductsQuery } from "@slices/productApiSlice";
import ProductCard from "@components/ProductCard";
import Loader from "@components/Loader";
import Alert from "@components/Alert";

const HomeScreen = () => {
  const { data: products, isLoading, isError, error } = useGetProductsQuery();

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-3 py-10 sm:px-4">
        <h1 className="text-2xl font-bold text-slate-900">Latest Products</h1>

        {isLoading ? (
          <Loader />
        ) : isError ? (
          <Alert type="error">
            {error?.data?.message || error?.error || "Something went wrong!"}
          </Alert>
        ) : (
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((prod) => (
              <ProductCard key={prod._id} product={prod} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default HomeScreen;
