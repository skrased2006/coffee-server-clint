import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './Component/MainLayout.jsx';
import Home from './Component/Home.jsx';
import AddCoffee from './Component/AddCoffee.jsx';
import UpdetCoffee from './Component/UpdetCoffee.jsx';
import CoffeeDeatail from './Component/CoffeeDeatail.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    children: [
      {
        index:true,
        loader:()=>fetch('http://localhost:5000/coffees'),
        Component:Home
      },
      {
        path: "/addCoffe",
        Component:AddCoffee
      },
      {
        path:'coffee/:id',
        Component:CoffeeDeatail

      },

      {
        path: "/updetCoffee/:id",
        loader:({params})=>fetch(`http://localhost:5000/coffees/${params.id}`),
        Component:UpdetCoffee
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
