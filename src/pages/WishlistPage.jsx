import { Heart, ShoppingCart, X } from "lucide-react";
import { useWishlist } from "../Components/WishlistContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useCart } from "../Components/CartContext";
import { toast, Toaster } from "sonner";
function Wishlist() {
  const { items, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  function handleRemove(product) {
    removeFromWishlist(product);
    toast.success("Removed from wishlist");
  }
  function handleAddToCart(product) {
    addToCart(product);
    toast.success("Added to cart!", {
      description: product.name,
    });
  }
  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center flex flex-col gap-8">
          <div className="text-center flex flex-col gap-2">
            <Heart className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
            <h3 className="text-primary ">Your wishlist is empty</h3>
            <p className="text-muted">Add products you love to your wishlist</p>
          </div>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="flex items-center justify-center gap-2 rounded-md font-medium text-white bg-bg-button  text-sm  hover:bg-blue-700 dark:hover:bg-blue-800 transition-colors duration-200 w-fit mx-auto px-3 py-2"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-40">
      <Toaster position="top-center" />
      <div className="mb-8 flex flex-col gap-2 ">
        <h2 className="text-primary">My Wishlist</h2>
        <span className="text-muted">
          {items.length} {items.length === 1 ? "item" : "items"}
        </span>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`} className="group block ">
              <div className="bg-bg-footer border-border border rounded-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-square rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700 relative">
                  <img
                    alt={product.name}
                    src={product.image}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 "
                  />

                  <button
                    className="absolute top-3 right-3 w-10 h-10 bg-accent rounded-full flex items-center justify-center shadow-md  transition-all duration-200 hover:scale-110 z-10"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleRemove(product.id);
                    }}
                  >
                    <X
                      className={`w-5 h-5 transition-colors text-primary hover:text-count`}
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
                    <button
                      className="w-full bg-bg-button text-white font-medium   transition-colors duration-300 shadow-lg flex justify-center items-center gap-2 rounded-lg py-2 hover:bg-blue-700 dark:hover:bg-blue-800"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleAddToCart(product);
                      }}
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Wishlist;
