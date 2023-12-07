
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";


import Home from './pages/home/home';

import { Button, ConfigProvider, Space } from 'antd';

import Layout from './pages/layout/layout';
import Patients from "./pages/patients/patients";
import Dashboard from "./pages/dashboard/dashboard"
import Operators from "./pages/operators/operators"
import Session from "./pages/session/session"
import Testpage from "./pages/testpage";


export default function Routerdom() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path:"/",
          element:<Dashboard />
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
        },
        {
          path: "/test",
          element:<Testpage/>
      
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


