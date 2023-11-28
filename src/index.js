import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Routerdom from './routerdom';
import { ConfigProvider, ErrorBlock } from 'antd-mobile'
import enUS from 'antd-mobile/es/locales/en-US'


const root = ReactDOM.createRoot(document.getElementById('root'));
//Contexts Antd mobile configprovider and routerdom
root.render(
  <React.StrictMode>    
    <ConfigProvider locale={enUS}>
      <Routerdom />
    </ConfigProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
