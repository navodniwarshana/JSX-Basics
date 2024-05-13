import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Blog from './Subpages/Blog.jsx'
import About from './Subpages/About.jsx'
import Contact from './Subpages/Contact.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  
  {
    path: "/blog",
    element: <Blog />,
  },
  
  {
    path: "/about",
    element: <About />,
  },
  
  {
    path: "/contact",
    element: <Contact />,
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />
    
  </React.StrictMode>
)
 