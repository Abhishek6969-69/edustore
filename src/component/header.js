import React from 'react'
import { IMG_URL } from '../utils/constant'
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import Profile from './profile';

function Header() {
    const { loginWithRedirect,logout,isAuthenticated } = useAuth0();
    return (
       <div className='flex gap-20 my-4 border border-grey-400 w-full'>
       <img  className='  w-24 h-24' src={IMG_URL} />
       <div className='flex items-center gap-0' >
        <ul className='flex p-3  '>
        <li  className='m-6'><Link to="/">Home</Link></li>
           
            <li  className='m-6'><Link to="/electronic">Electronics</Link></li>
            <li  className='m-6'><Link to="/beauty">Beauty</Link></li>
        </ul>
         <input type='text' className='border border-black w-64 p-2 rounded-lg bg-slate-100 ' placeholder='search for products' />
       
        </div>
     
        <div className='flex     items-center absolute right-8 top-8 justify-center'>
            <div className='flex gap-8 '>
            <Link to="/profile">   <div>
            <img className=' w-10 h-10 hover:cursor-pointer ' src="https://static.thenounproject.com/png/854888-200.png" />
            <p>profile</p>
            </div>
            </Link> 
         <div >
           
                <img className=' w-10 h-10 hover:cursor-pointer' src="https://static.thenounproject.com/png/3386813-200.png"/>
                <p>wishlist</p>
            </div>
           
            <div>
            <Link to="/cart" >   <img className=' w-10 h-10 hover:cursor-pointer' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUwTJJWgY_YJ_EubAzNZvIHWQjEH-yirjllg&s"/></Link> 
                <p className='mx-2'>bag</p>
            </div>
            </div>
        </div>
        { !isAuthenticated ?(<button className='border border-2    border-[#023E8A] w-24 p-2  rounded-md my-6 ' onClick={() => loginWithRedirect()}>Log In</button>):(<button  className='border border-2   border-[#023E8A]    w-20 p-2  rounded-md my-6 ' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>)}
       </div>
       
    )
}

export default Header
