import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Beautycard from './beautycard';
import { Link } from 'react-router-dom';

function Beauty() {
    
    
    const [caritem1,setcarditem1]=useState([]);
    const fetapiurl=async()=>{
   const val1= await fetch("https://d2330pufzy0cvr.cloudfront.net/carousel-products/e36d0467-3aa7-4c6e-a92c-1283b0f6bebe-1E344D27490D741E252B4527A7CC409A.json");
   const json3=await val1.json();
   console.log(json3);
   setcarditem1(json3);
    }
     useEffect(()=>{
      fetapiurl()
    },[])
    return (
        
        <div className=' flex flex-wrap gap-24 '>
            {
            caritem1.map((f)=>{
return(
    <div >
     {/* {  console.log(f.asin)} */}
  <Beautycard val={f} />
   </div>
       )
            })
        }
        </div>
    )
}

export default Beauty
