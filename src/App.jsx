import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Categories from "./pages/Categories";
import NotFound from "./pages/NotFound";
import ProductDetales from "./pages/ProductDetales";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "about", element: <About /> },
  { path: "cart", element: <Cart /> },
  { path: "categories", element: <Categories /> },
  { path: "not_found", element: <NotFound /> },
  { path: "product_detales", element: <ProductDetales /> },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
