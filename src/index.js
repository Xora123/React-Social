import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Inscription from './components/Inscription';
import Home from './components/Accueil';
import Profil from './components/Profil';

const router = createBrowserRouter([
  {
    path: "/inscription",
    element: <Inscription />,
  },
  {
    path: "/Home",
    element: <Home/>},
    {
    path: "/Profil",
    element: <Profil/>,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();