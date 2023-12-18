
import {
  createBrowserRouter,
  RouterProvider  
} from "react-router-dom";


import Home from './pages/home/Home';
import Layout from './pages/layout/layout';
import Dashboard from "./pages/dashboard/dashboard"
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
          path:"/dashboard",
          element:<Dashboard />
        },
        {
          path:"/session",
          element:<Session />
        }           
      ]
    }    
  ]);

  return <RouterProvider router = {router}/>
}


