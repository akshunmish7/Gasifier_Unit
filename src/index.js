import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Efficiency from './Pages/Efficiency';
import reportWebVitals from './reportWebVitals';
import Excel from './Pages/Excel';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/eff",
    element: <Efficiency/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/charts",
    element: <Excel/>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
