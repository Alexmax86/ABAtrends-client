'use client'

import './layout.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  NavLink,
} from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { ConfigProvider } from 'antd';


function Layout() {
  return (
    <>
    <ConfigProvider
    theme={{
      token: {
        // Seed Token
        colorPrimary: '#23232e',        
      },
    }}>
      
      <div className="container">
        <nav className='navbar'>
          <ul className="navbar-nav">
            <li className="logo">
              <NavLink to="/" href="#" className="nav-link">
                <span className="link-text logo-text">Abatrends</span>
                <svg
                  className="svg-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  height="2em"
                  viewBox="0 0 320 512"
                >                
                  <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                </svg>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/operators" href="#" className="nav-link" activeclassname="active">
                <svg
                  className="svg-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  height="2em"
                  viewBox="0 0 448 512"
                >
                  
                  <path d="M96 128V70.2c0-13.3 8.3-25.3 20.8-30l96-36c7.2-2.7 15.2-2.7 22.5 0l96 36c12.5 4.7 20.8 16.6 20.8 30V128h-.3c.2 2.6 .3 5.3 .3 8v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V136c0-2.7 .1-5.4 .3-8H96zm48 48c0 44.2 35.8 80 80 80s80-35.8 80-80V160H144v16zM111.9 327.7c10.5-3.4 21.8 .4 29.4 8.5l71 75.5c6.3 6.7 17 6.7 23.3 0l71-75.5c7.6-8.1 18.9-11.9 29.4-8.5C401 348.6 448 409.4 448 481.3c0 17-13.8 30.7-30.7 30.7H30.7C13.8 512 0 498.2 0 481.3c0-71.9 47-132.7 111.9-153.6zM208 48V64H192c-4.4 0-8 3.6-8 8V88c0 4.4 3.6 8 8 8h16v16c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V96h16c4.4 0 8-3.6 8-8V72c0-4.4-3.6-8-8-8H240V48c0-4.4-3.6-8-8-8H216c-4.4 0-8 3.6-8 8z" />
                </svg>
                <span className="link-text">Therapists</span>
              </NavLink>
            </li>
            
            <li className="nav-item">            
              <NavLink to="/patients" href="#" className="nav-link" activeclassname="active">
                <svg
                  className="svg-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1.5em"
                  viewBox="0 0 512 512">
                
                  <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z" />
                </svg>
                <span className="link-text">Patients</span>
              </NavLink>
            </li>  
  
            
            <li className="nav-item">
              <NavLink to="/dashboard"  className="nav-link" activeclassname="active">  
                <svg
                  className="svg-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  height="2em"
                  viewBox="0 0 512 512">        
                  <path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z" />
                </svg>
                <span className="link-text">Dashboard</span>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/session"  className="nav-link" activeclassname="active">  
                <svg
                  className="svg-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  height="2em"
                  viewBox="0 0 512 512"
                >        
                  <path d="M448 32H361.9l-1 1-127 127h92.1l1-1L453.8 32.3c-1.9-.2-3.8-.3-5.8-.3zm64 128V96c0-15.1-5.3-29.1-14-40l-104 104H512zM294.1 32H201.9l-1 1L73.9 160h92.1l1-1 127-127zM64 32C28.7 32 0 60.7 0 96v64H6.1l1-1 127-127H64zM512 192H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192z" />
                </svg>
                <span className="link-text">Session </span>
              </NavLink>
            </li>
            
          </ul>
        </nav>  
          
        <div className='content'>        
        
          <Outlet />
        
        </div>
        
      </div>
      </ConfigProvider>
    </>
  );
}

export default Layout;
