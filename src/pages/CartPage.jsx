import { Trash2, Minus, Plus, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Components/CartContext";
function Cart() {
  const navigate = useNavigate();
  const { total, removeFromCart, updateQuantity, items } = useCart();

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center flex flex-col gap-8">
          <div className="text-center flex flex-col gap-2">
            <ShoppingBag className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
            <h3 className="text-primary ">Your cart is empty</h3>
            <p className="text-muted">Add some products to get started</p>
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">
      <h3 className="text-primary  mb-8">Shopping Cart</h3>
      <div className=" grid lg:grid-cols-3 gap-8 items-start">
        <div className="grid lg:col-span-2  gap-8">
          {items.map((item) => (
            <div
              className="p-4 flex  gap-4 border border-border rounded-lg bg-bg-footer"
              key={item.id}
            >
              <div className="w-24 h-24 rounded-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <div className="flex justify-between items-center">
                  <h3 className="text-primary font-semibold text-[18px] truncate max-w-[100px] min-[360px]:min-w-fit">
                    {item.name}
                  </h3>
                  <div>
                    <button
                      className="text-footer hover:text-count transtion-colors duration-100"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <span className="text-sm text-muted">{item.category}</span>
                <div className="flex justify-between items-center">
                  <div className="flex items-center border border-border rounded-lg gap-2 sm:gap-3">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-2  text-muted transtion-colors hover:bg-gray-50  dark:hover:bg-gray-700 disabled:opacity-50"
                      disabled={item.quantity <= 1}
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-primary">{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-2 text-muted transtion-colors hover:bg-gray-50  dark:hover:bg-gray-700 disabled:opacity-50 "
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <span className="text-price ">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className=" lg:col-span-1 bg-bg-footer p-6 rounded-lg border-border border flex flex-col gap-6 sticky top-24">
          <span className="text-primary">Order Summary</span>
          <div className="flex flex-col gap-3">
            <div className="flex justify-between text-muted">
              <span>SubTotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-muted">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between text-muted border-t border-border pt-3">
              <span className="text-primary">Total</span>
              <span className="text-price">${total.toFixed(2)}</span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-md font-medium  text-white bg-bg-button py-2 text-sm  hover:bg-blue-700 dark:hover:bg-blue-800 transition-colors duration-200"
            >
              Proceed to Checkout
            </button>
            <button
              type="button"
              onClick={() => navigate("/")}
              className="flex items-center justify-center gap-2 rounded-md font-medium text-primary bg-bg-footer py-2 text-sm  border border-border hover:bg-gray-200 dark:hover:bg-accent transition-colors duration-200"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
