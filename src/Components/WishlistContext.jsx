import { createContext, useContext, useState } from "react";

const WishlistContext = createContext();

export function WishListProvider({ children }) {
  const [items, setItems] = useState([]);

  function addToWishlist(product) {
    setItems((current) => {
      const exists = current.find((item) => item.id === product.id);
      if (exists) return current;
      return [...current, product];
    });
  }
  function removeFromWishlist(productId) {
    setItems((current) => current.filter((item) => item.id !== productId));
  }
  function isInWishlist(productId) {
    return items.some((item) => item.id === productId);
  }
  function toggleWishList(product) {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  }
  return (
    <WishlistContext.Provider
      value={{ toggleWishList, items, isInWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
}
export function useWishlist() {
  const context = useContext(WishlistContext);
  return context;
}
