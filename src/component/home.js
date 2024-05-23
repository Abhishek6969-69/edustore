import React, { useEffect } from 'react'
import Footer from './footer'
import Slider1 from './slider'
function Home() {
  
    return (
        <div className=' '>
        <div className=' flex mt-32'>
            <div  className='w-6/12 ml-20'>
             <h1>Welcome To</h1>
             <h1 className='  text-6xl'>EduStore</h1>
             <p className=' text-gray-600'>
             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto id
      maxime accusamus dolorum at numquam officiis odio asperiores mollitia,
      dolores ex,hello how are yoy
             </p>
             <button className=' mt-8 border  bg-[#023E8A] w-32 p-4 rounded-lg my-6  text-white '>Shop</button>
            </div>
            <div>
             <img className=' w-80 rounded-md' src='https://c8.alamy.com/comp/M0649P/cheerful-people-buying-detergents-for-house-in-the-shopping-mall-M0649P.jpg' />
            </div>
        </div>
       <Slider1 />
       <Footer /> 
       </div>
    )
}

export default Home
