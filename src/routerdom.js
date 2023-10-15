
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";


import Home from './pages/home/home';



import Layout from './pages/layout/layout';
import Patients from "./pages/patients/patients";
import Dashboard from "./pages/dashboard/dashboard"
import Operators from "./pages/operators/operators"
import Session from "./pages/session/session"


export default function Routerdom() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path:"/",
          element:<Home />
        },
        {
          path:"/operators",
          element:<Operators />
        },
        {
          path:"/patients",
          element:<Patients />
        },
        {
          path:"/dashboard",
          element:<Dashboard />
        },
        {
          path:"/session",
          element:<Session />
        }            
      ]
    }/*,
    
    {
      path: "/login",
      element: <Login />
    }
    */
    
  ]);

  return <RouterProvider router = {router}/>
}

