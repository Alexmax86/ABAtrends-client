'use client'
import './layout.css';
import {  
  Outlet,
  NavLink,
} from "react-router-dom";

import { ConfigProvider } from 'antd';
import { IconDashboard, IconHome, IconSession } from '../../Common/Components/Components';


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
              <NavLink to="/"  className="nav-link" activeclassname="active">  
                <IconHome height={2}/>
                <span className="link-text">Home </span>
              </NavLink>              
            </li>

            <li className="nav-item">
              <NavLink to="/session"  className="nav-link" activeclassname="active">  
                <IconSession height={2}/>
                <span className="link-text">Session </span>
              </NavLink>

              
            </li>
            <li className="nav-item">
              <NavLink to="/dashboard"  className="nav-link" activeclassname="active">  
                <IconDashboard height={2}/>
                <span className="link-text">Dashboard</span>
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
