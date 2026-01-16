import { ShoppingCart, Heart, Store, Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "./ThemeContext";
import { useCart } from "./CartContext";
import { useWishlist } from "./WishlistContext";
function Header() {
  const { theme, toggleTheme } = useTheme();
  const { items } = useCart();
  const { items: wishListItems } = useWishlist();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const wishlistCount = wishListItems.length;
  return (
    <div className="sticky top-0 z-50  backdrop-blur-xl border-border border-b bg-bg-footer">
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex justify-between ">
          <Link
            to={"/"}
            className="flex gap-2 items-center text-primary font-semibold "
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <Store className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-medium text-primary">Store</span>
          </Link>
          <div className="flex items-center gap-6">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-border  transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5 text-primary" />
              ) : (
                <Sun className="w-5 h-5 text-primary" />
              )}
            </button>

            <Link to="/wishlist" className="relative group">
              <Heart className="w-6 h-6 text-primary group-hover:text-red-500 transition-colors" />
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>
            <Link to="/cart" className="relative group">
              <ShoppingCart className="w-6 h-6 text-primary group-hover:text-blue-600 transition-colors" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
