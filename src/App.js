import React from "react";
import ProdectDetals from "./Pages/prodect/Prodectdet";
import Homepage from "./Pages/Home/Homepage";
import Register from "./Pages/login-Register/Register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Pages/login-Register/Login";
import Purchese from "./Pages/cacher/Purchese";
import Admin from "./Pages/Admin/Admin";
import Allcategory from "./Pages/Category/Allcategory";
import Productspage from "./Pages/ProductsPage/Productspage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
      errorElement: <h1>Error</h1>,
    },
    {
      path: "/product/:id",
      element: <ProdectDetals />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/Register",
      element: <Register />,
    },
    {
      path: "/purchase/:id",
      element: <Purchese></Purchese>,
    },
    {
      path: "/admin",
      element: <Admin></Admin>,
    },
    {
      path: "/admin/addnewbrand",
      element: <Admin></Admin>,
    },
    {
      path: "/Allcategory",
      element: <Allcategory/>,
    },
    {
      path: "/Products",
      element: <Productspage/>,
    },

  ]);

  return (
    <div className="font">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
