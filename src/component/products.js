import React from 'react'
import { useEffect,useState } from 'react';
import { Card_API } from '../utils/constant';
import { useParams } from 'react-router-dom';
import { API } from '../utils/constant';
import { useDispatch, useSelector } from "react-redux";
import { addUsers } from '../store/slice/userslice';
import Card from './card';
import Store from '../store/slice/store';

function Products() {
    const{productId}=useParams();
   
  // const caritem=useSelector((store)=>store.cart.items)
   const[listitem,setlistitem]=useState({});
  const dispatch=useDispatch();
  console.log(dispatch,"hi");
  
   
    const[productData,setproductData]=useState([]);
    const[otherdata,setotherdata]=useState([]);
    
    const fetchapi2=async ()=>{
      
        const data2= await fetch(Card_API+productId);
        const json2=await  data2.json();
       console.log(json2);
        setproductData(json2.image);
       setotherdata(json2);
       setlistitem(json2);
    }
    
     useEffect(()=>{
      fetchapi2();
    },[]);
    const additemhandle=()=>{
  
      dispatch(addUsers(otherdata,1));
          }
          const handleincrease=()=>{
            dispatch(addUsers(otherdata,1));
          }
         
   return (
 
     <div className='flex  mx-6 '>
      <div className='flex flex-wrap  w-8/12 gap-4 my-16 h-screen'>
     { 

     
     productData && productData.map((p)=>{
         return(
          <div className='  '>
<img className='w-80  h-96 object-cover' src={p.url}></img>
            </div>
         )
      })
      
    }
    </div>
<div className=' w-6/12 my-16  h-screen'>

  <h3 className='   font-bold'>{otherdata.company && (otherdata.company).toUpperCase()}</h3>
  <p>{otherdata.name && otherdata.name

}</p>
<div className=' w-56 h-10   flex items-center  gap-1'>
  <div className='flex '>
<h1>{otherdata?.stars} </h1>
  <img className=' w-7 ' src="https://as1.ftcdn.net/v2/jpg/04/21/45/54/1000_F_421455445_QnmwPOsojdXMUrnm7LGUoPgKA2xZyHNF.jpg" />
  </div>
  <div>
    <h1>| {otherdata?.reviews}  Reviews</h1>
  </div>
 
</div>
<div className=' border border-t-2 m-2 border-gray-400 mx-0'>

</div>
<h1 className=' font-bold  text-xl'>₹{otherdata?.price}</h1>
<p className='  text-[#023E8A]'>inclusive of all taxes</p>
<p className='  text-gray-600'>{(otherdata?.description)}</p>
<div className=' flex gap-2'>
  <button className=' bg-[#023E8A] w-48 p-6 rounded-lg my-6  text-white' onClick={()=> {additemhandle()}}  >Add to Bag</button>
  <button className='border border-2    border-[#023E8A] w-48 p-2 rounded-xl my-6 '>whishlist</button>
</div>
<div>
  <div>
    <div>
      <p>{otherdata.qty}</p>
    { console.log(otherdata)}
    </div>
    <div className='flex gap-3'>
    <div>
        <button className='border   border-[#023E8A] w-8 rounded-lg'>-</button>
    </div>
    <div>
        <p>QTY:{otherdata.qty} </p>
    </div>
    <div>
        <button className='border   border-[#023E8A] w-8 rounded-lg' onClick={()=>{
          handleincrease();
        }}>+</button>
    </div>
 </div>
     
   
  </div>
</div>
  </div>

     </div>
   );
}

export default Products
