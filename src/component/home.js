import React, { useEffect } from 'react'
import Footer from './footer'
import Slider from './slider'
function Home() {
  
    return (
        <div className=' '>
        <div className=' md:flex mt-32'>
            <div  className='w-6/12 ml-3 md:ml-20'>
             <h1>Welcome To</h1>
             <h1 className='  text-6xl'>EduStore</h1>
             <p className='hidden md:inline-block text-gray-600'>
             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto id
      maxime accusamus dolorum at numquam officiis odio asperiores mollitia,
      dolores ex,hello how are yoy
             </p>
             <button className='hidden md:inline-block mt-8 border  bg-[#023E8A] w-32 p-4 rounded-lg my-6  text-white '>Shop</button>
            </div>
            <div>
             <img className='w-52 mx-3 md:w-80 mt-5 md:mt-0 rounded-md' src='https://c8.alamy.com/comp/M0649P/cheerful-people-buying-detergents-for-house-in-the-shopping-mall-M0649P.jpg' />
            </div>
        </div>
        {/* <div >
        <Slider />
        </div> */}
       
       <div className='hidden w-[100px] md:w-screen md:inline-block'>
       <Footer /> 
       </div>
       </div>
    )
}

export default Home
