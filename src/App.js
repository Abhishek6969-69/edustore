import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./component/header";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./store/slice/store";
import Electronic from "./component/electronic";
import Products from "./component/products";
import Cart from "./component/cart";
import Home from "./component/home";

import Profile from "./component/profile";
import Login from "./component/login";

const Applayout=()=>{
    return(
        <div className=" " >
            <Provider store={Store}>
                <div className=" ">
            <Header />
            </div>
            <Outlet />
            </Provider>
        </div>
    )
}
export const approuter = createBrowserRouter([
    {
    path:"/",
    element:<Applayout />,
    children:[
       {
        path:"/",
        element:<Home />,
       },
       
        {
            path:"/electronic",
            element:<Electronic />
        },
        {
          path:"/products/:productId",
          element:<Products />
        },
        {
            path:"/cart",
            element:<Cart />
        },
       
        
        {
            path:"/profile",
            element:<Profile />
        },
        {
            path:"/login",
            element:<Login />
        }
        
    ]
   },
  
]

)
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter} />);