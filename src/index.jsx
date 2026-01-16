import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./global.css";
import { ThemeProvider } from "./Components/ThemeContext";
import { CartProvider } from "./Components/CartContext";
import { WishListProvider } from "./Components/WishlistContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <CartProvider>
        <WishListProvider>
          <App />
        </WishListProvider>
      </CartProvider>
    </ThemeProvider>
  </React.StrictMode>
);
