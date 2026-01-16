import { ShoppingCart, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useWishlist } from "./WishlistContext";
import { useCart } from "./CartContext";
import { toast } from "sonner";
function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { toggleWishList, isInWishlist } = useWishlist();
  const inWishlist = isInWishlist(product.id);
  function handleAddToCart(e) {
    e.preventDefault();
    addToCart(product);
    toast.success("Added to cart!", {
      description: product.name,
    });
  }
  function handleToggleWishlist(e) {
    e.preventDefault();
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
    <li>
      <Link
        to={`/products/${product.id}`}
        className="group block hover:-translate-y-2 transition-transform duration-200"
      >
        <div className="bg-bg-footer border-border border rounded-lg hover:shadow-xl transition-all duration-300">
          <div className="aspect-square rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700 relative">
            <img
              alt={product.name}
              src={product.image}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 "
            />

            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300">
              <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <button
                  className="w-full bg-white text-black font-medium hover:bg-bg-button hover:text-white  transition-colors duration-300 shadow-lg flex justify-center items-center gap-2 rounded-lg py-2"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>

            <button
              className="absolute top-3 right-3 w-10 h-10 bg-accent rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110 z-10"
              onClick={handleToggleWishlist}
            >
              <Heart
                className={`w-5 h-5 transition-colors ${
                  inWishlist ? "fill-count text-count" : "text-primary"
                }`}
              />
            </button>
          </div>
          <div className="p-4">
            <div className="flex flex-col gap-2">
              <p className="text-name uppercase">{product.category}</p>
              <h3 className="text-primary group-hover:text-price transition-colors dark:group-hover:text-primary">
                {product.name}
              </h3>
              <span className="text-price">${product.price}</span>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default ProductCard;
