import { ArrowLeft, ShoppingCart, Heart } from "lucide-react";
import { products } from "../products";
import { useNavigate, useParams } from "react-router-dom";
import { useCart } from "../Components/CartContext";
import { useWishlist } from "../Components/WishlistContext";
import { toast, Toaster } from "sonner";
function ProductDetails() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toggleWishList, isInWishlist } = useWishlist();
  const product = products.find((product) => product.id === Number(productId));
  const inWishlist = isInWishlist(product.id);
  function handleAddToCart() {
    addToCart(product);
    toast.success("Added to cart!", {
      description: product.name,
    });
  }

  function handleToggleWishlist() {
    toggleWishList(product);
    if (!inWishlist) {
      toast.success("Added to wishlist!", {
        description: product.name,
      });
    } else {
      toast.success("Removed from wishlist");
    }
  }
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Toaster position="top-center" />
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-muted hover:text-primary mb-8 text-[18px] transition-colors duration-200"
      >
        <ArrowLeft className="w-4 h-4" /> Back
      </button>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="aspect-square rounded-lg overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <span className="text-sm text-muted uppercase">
              {product.category}
            </span>
            <h2 className="text-3xl text-primary mb-2">{product.name}</h2>
            <span className="text-2xl text-price">${product.price}</span>
          </div>
          <div className="mb-4 flex flex-col gap-4">
            <span className="text-primary">Description</span>
            <p className="text-muted">{product.description}</p>
          </div>
          <div className="flex flex-col gap-3">
            <button
              type="button"
              onClick={handleAddToCart}
              className="flex items-center justify-center gap-2 rounded-md font-medium text-white bg-bg-button py-3 text-sm sm:text-base hover:bg-blue-700 dark:hover:bg-blue-800 transition-colors duration-200"
            >
              <ShoppingCart className="w-5 h-5" />
              Add to Cart
            </button>
            <button
              type="button"
              onClick={handleToggleWishlist}
              className="flex items-center justify-center gap-2 rounded-md font-medium text-primary bg-bg-footer py-3 text-sm sm:text-base border border-border hover:bg-gray-200 dark:hover:bg-accent transition-colors duration-200"
            >
              <Heart className="w-5 h-5" />
              {inWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
