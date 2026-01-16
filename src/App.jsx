import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./pages/HomePage";
import Cart from "./pages/CartPage";
import ProductDetails from "./pages/ProductDetailsPage";
import NotFound from "./pages/NotFoundPage";
import Wishlist from "./pages/WishlistPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "/products/:productId", element: <ProductDetails /> },
      { path: "/cart", element: <Cart /> },
      { path: "/wishlist", element: <Wishlist /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
