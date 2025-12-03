import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import NotFound from "./pages/NotFound";
import ProductDetales from "./pages/ProductDetales";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "about",
        element: <About />,
        children: [{ path: "", element: <Home /> }],
      },
      {
        path: "cart",
        element: <Cart />,
        children: [{ path: "", element: <Home /> }],
      },
      {
        path: "category/:categoryId",
        element: <Category />,
        children: [{ path: "", element: <Home /> }],
      },
      {
        path: "not_found",
        element: <NotFound />,
        children: [{ path: "", element: <Home /> }],
      },
      {
        path: "product/:productId",
        element: <ProductDetales />,
        children: [{ path: "", element: <Home /> }],
      },
    ],
  },
]);
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <>
//         <Header />
//         <Home />
//         <Footer />
//       </>
//     ),
//   },
//   {
//     path: "about",
//     element: (
//       <>
//         <Header />
//         <About />
//         <Footer />
//       </>
//     ),
//   },
//   {
//     path: "cart",
//     element: (
//       <>
//         <Header />
//         <Cart />
//         <Footer />
//       </>
//     ),
//   },
//   {
//     path: "categories",
//     element: (
//       <>
//         <Header />
//         <Categories />
//         <Footer />
//       </>
//     ),
//   },
//   {
//     path: "not_found",
//     element: (
//       <>
//         <Header />
//         <NotFound />
//       </>
//     ),
//   },
//   {
//     path: "product_detales",
//     element: (
//       <>
//         <Header />
//         <ProductDetales />
//       </>
//     ),
//   },
// ]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
