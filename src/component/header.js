import React, { useState } from "react";
import { IMG_URL } from "../utils/constant";
import { Link, useNavigate } from "react-router-dom";

// import { useAuth0 } from "@auth0/auth0-react";


function Header() {
 const navigate=useNavigate()
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
      setMenuOpen(!menuOpen);
  };
  return (
    <div className=" flex   md:text-black  md:flex   md:gap-20 md:my-4 md:border border-grey-400 md:w-full">
      <img
        onClick={toggleMenu}
        className=" w-8 h-8 mt-8 mx-5 md:mt-0 object-cover   md:w-24 md:h-24"
        src={IMG_URL}
      />
     

     
 <div className="flex items-center gap-0 ">
        <ul className="flex p-3  ">
          <li className="my-6 mx-[-5px] md:m-4">
            <Link to="/">Home</Link>
          </li>

          <li className="my-6 mx-[15px] md:m-4">
            <Link to="/electronic">Electronics</Link>
          </li>
          
        </ul>
        <input
          type="text"
          className="hidden md:inline-block border border-black w-64 p-2 rounded-lg bg-slate-100 "
          placeholder="search for products"
        />
      </div>
         <div className=" flex items-center">
         <button onClick={()=>{
          navigate("/login")
         }} className="hidden md:inline-block mt-8 border  bg-[#023E8A] w-24 p-4 rounded-lg my-6  text-white">Login</button>
         </div>
      <div className="inline md:flex    md:items-center md:absolute right-8 top-8 justify-center">
        <div className=" flex   md:mx-0 md:flex gap-8 ">
          <Link to="/profile">
            {" "}
            <div className="hidden md:inline-block  ">
              <img
                className=" w-10 h-10 hover:cursor-pointer "
                src="https://static.thenounproject.com/png/854888-200.png"
              />
              <p>profile</p>
            </div>
          </Link>
          <div className="  hidden md:inline-block">
            <img
              className="  w- h-10 hover:cursor-pointer"
              src="https://static.thenounproject.com/png/3386813-200.png"
            />
            <p>wishlist</p>
          </div>

          <div className=" mt-8 mx-[-45px] md:mx-0 md:mt-0">
            <Link to="/cart">
              {" "}
              <img
                className="w-6 h-6 object-cover md:w-10 md:h-10 hover:cursor-pointer"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUwTJJWgY_YJ_EubAzNZvIHWQjEH-yirjllg&s"
              />
            </Link>
            <p className="md:mx-2">bag</p>
          </div>
        </div>
        
     
      </div>

      
    </div>
  );
}

export default Header;
