import React from 'react'
import Products from './products'
import { useDispatch } from 'react-redux'


function Card(props) {
  
   return (
      

       
           
             <div className=' border  border-gray-50 hover:shadow-lg  p-2 m-3  flex' >
                 <div   >
                  <div className=' relative'>

                 <img className='  w-80 h-48 object-cover border rounded-lg' src={props?.data?.image} />
                 </div>
                 <h1 className="  font-extrabold mx-2">{props?.data?.name}</h1>
                 <p className="   mx-2">Brand:{(props?.data?.company)?.toUpperCase()}</p>
              
                <p>Price: ₹{props?.data?.price/100}</p>
                 </div>
               
                 </div>
             
        
   )
}

export default Card
