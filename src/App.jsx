// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Cart from "./pages/Cart";
// import Category from "./pages/Category";
// import NotFound from "./pages/NotFound";
// import ProductDetales from "./pages/ProductDetales";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Layout from "./components/Layout";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       { index: true, element: <Home /> },
//       {
//         path: "about",
//         element: <About />,
//         children: [{ path: "", element: <Home /> }],
//       },
//       {
//         path: "cart",
//         element: <Cart />,
//         children: [{ path: "", element: <Home /> }],
//       },
//       {
//         path: "category/:categoryId",
//         element: <Category />,
//         children: [{ path: "", element: <Home /> }],
//       },
//       {
//         path: "not_found",
//         element: <NotFound />,
//         children: [{ path: "", element: <Home /> }],
//       },
//       {
//         path: "product/:productId",
//         element: <ProductDetales />,
//         children: [{ path: "", element: <Home /> }],
//       },
//     ],
//   },
// ]);
// // const router = createBrowserRouter([
// //   {
// //     path: "/",
// //     element: (
// //       <>
// //         <Header />
// //         <Home />
// //         <Footer />
// //       </>
// //     ),
// //   },
// //   {
// //     path: "about",
// //     element: (
// //       <>
// //         <Header />
// //         <About />
// //         <Footer />
// //       </>
// //     ),
// //   },
// //   {
// //     path: "cart",
// //     element: (
// //       <>
// //         <Header />
// //         <Cart />
// //         <Footer />
// //       </>
// //     ),
// //   },
// //   {
// //     path: "categories",
// //     element: (
// //       <>
// //         <Header />
// //         <Categories />
// //         <Footer />
// //       </>
// //     ),
// //   },
// //   {
// //     path: "not_found",
// //     element: (
// //       <>
// //         <Header />
// //         <NotFound />
// //       </>
// //     ),
// //   },
// //   {
// //     path: "product_detales",
// //     element: (
// //       <>
// //         <Header />
// //         <ProductDetales />
// //       </>
// //     ),
// //   },
// // ]);
// function App() {
//   return <RouterProvider router={router} />;
// }

// export default App;
import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Link,
  useSearchParams,
} from "react-router-dom";

function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get("name") || "";

  const handleChange = (e) => {
    setSearchParams({ name: e.target.value });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Home Page</h1>
      <p>
        Current value of the "name" parameter: <b>{name}</b>
      </p>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter a name"
        style={{ marginRight: "10px" }}
      />
      <p style={{ marginTop: "20px" }}>
        <Link to="/other">Go to another page</Link>
      </p>
    </div>
  );
}

function OtherPage() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Other Page</h1>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/other" element={<OtherPage />} />
    </>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
