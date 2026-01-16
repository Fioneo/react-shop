import ProductCard from "../Components/ProductCard";
import { products } from "../products";
import { Toaster } from "sonner";
function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Toaster position="top-center" />
      <div className="flex flex-col gap-16">
        <div className="text-primary text-center flex flex-col gap-4">
          <h1 className="text-4xl">Welcome to Our Store</h1>
          <p className="text-muted max-w-2xl mx-auto">
            Discover our curated collection of premium products designed for
            modern living.
          </p>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
