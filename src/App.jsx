import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Categories from "./pages/Categories";
import NotFound from "./pages/NotFound";
import ProductDetales from "./pages/ProductDetales";
import Header from "./components/Header";
import Footer from "./components/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: "about",
    element: (
      <>
        <Header />
        <About />
        <Footer />
      </>
    ),
  },
  {
    path: "cart",
    element: (
      <>
        <Header />
        <Cart />
        <Footer />
      </>
    ),
  },
  {
    path: "categories",
    element: (
      <>
        <Header />
        <Categories />
        <Footer />
      </>
    ),
  },
  {
    path: "not_found",
    element: (
      <>
        <Header />
        <NotFound />
      </>
    ),
  },
  {
    path: "product_detales",
    element: (
      <>
        <Header />
        <ProductDetales />
      </>
    ),
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
