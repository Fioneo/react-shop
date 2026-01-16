import { Store } from "lucide-react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="border-t bg-bg-footer border-border transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col">
          <div className="grid grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2 flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                  <Store className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-medium text-primary">Store</span>
              </div>
              <p className="text-footer max-w-sm">
                Your destination for premium products. Quality and style,
                delivered.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-primary">Shop</h4>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link to={"/"} className="text-footer hover:text-primary">
                    All Products
                  </Link>
                </li>
                <li>
                  <Link to={"/cart"} className="text-footer hover:text-primary">
                    Cart
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/wishlist"}
                    className="text-footer hover:text-primary"
                  >
                    Wishlist
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-primary">Support</h4>
              <ul className="flex flex-col gap-2">
                <li>
                  <a href="/" className="text-footer hover:text-primary">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/" className="text-footer hover:text-primary">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="/" className="text-footer hover:text-primary">
                    Shipping
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-border text-center text-footer mt-8">
          <p>© 2026 Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
