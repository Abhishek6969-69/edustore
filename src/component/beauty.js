import React, { useEffect, useState } from 'react'

import Beautycard from './beautycard';


function Beauty() {
   
   
    
    const [caritem1,setcarditem1]=useState([]);
    const fetapiurl=async()=>{
   const val1= await fetch("https://d2330pufzy0cvr.cloudfront.net/carousel-products/e36d0467-3aa7-4c6e-a92c-1283b0f6bebe-1E344D27490D741E252B4527A7CC409A.json");
   const json3=await val1.json();
  
   setcarditem1(json3);
   
    }
     useEffect(()=>{
      fetapiurl()
    },[])
    return (
        
        <div className=' flex flex-wrap gap-16 '>
            {
            caritem1.map((f)=>{
return(
    <div >

  <Beautycard val={f} />
   </div>
       )
            })
        }
        </div>
    )
}

export default Beauty
