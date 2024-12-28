import React from 'react';
import ProdectDetals from './Pages/prodect/Prodectdet';
import Homepage from './Pages/Home/Homepage';
import Register from './Pages/login-Register/Register';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loginpanel from './Commponet/Login-Regiseter/Loginpanel';
import Login from './Pages/login-Register/Login';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
      errorElement: <h1>Error</h1>,
    },
    {
      path: "/product/:id",
      element: <ProdectDetals/>,
    },
    {
      path: "/login",
      element: <Login/>

    }
  ]);

  return (
    <div >
      <RouterProvider router={router} />
    </div>)
}

export default App;
