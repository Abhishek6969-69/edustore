import React from 'react'
import { useEffect,useState } from 'react'
import { API } from '../utils/constant';
import Card from './card';
import { Link } from 'react-router-dom';
import Footer from './footer';
function Electronic() {
    
    const [itemlist,setitemlist]=useState([]);
    const[list,setlist]=useState([]);
    const fetchapi=async ()=>{
        const data1= await fetch(API);
        const json1=await  data1.json();
        
        setitemlist(json1);
        setlist(json1);
       }
     useEffect(()=>{
      fetchapi();
    },[]);
    
    return (
        <div className=' mx-8 md:mx-0  md:flex justify-normal '>
            <div className='md:border    md:w-80   md:h-96 md:p-2  md:m-24 '>
                <div className=' md:m-6 flex md:inline-block'>
                    <h1 className='hidden md:inline-block m-6'>Category</h1>
                    <ul className='flex mx-4 md:inline-block'> 
                        <li className='m-2 md:m-6 hover:cursor-pointer'  onClick={()=>{
                             
                                setitemlist(list);
                        }} >All</li>
                        <li  className='m-2 md:m-6 hover:cursor-pointer' onClick={()=>{
                             const  list1= list.filter((f)=>{
                                    return f.category==="mobile";
                                }
                               
                                )
                                setitemlist(list1);
                        }}>Mobile</li>
                        <li  className='m-2 md:m- hover:cursor-pointer'  onClick={()=>{
                             const  list1= list.filter((f)=>{
                                    return f.category==="laptop";
                                }
                               
                                )
                                setitemlist(list1);
                        }}>Laptop</li>
                        <li  className='m-2 md:m- hover:cursor-pointer'  onClick={()=>{
                             const  list1= list.filter((f)=>{
                                    return f.category==="accessories";
                                }
                               
                                )
                                setitemlist(list1);
                        }}>Accessories</li>
                        <li  className='m-2 md:m- hover:cursor-pointer'  onClick={()=>{
                             const  list1= list.filter((f)=>{
                                    return f.category==="watch";
                                }
                               
                                )
                                setitemlist(list1);
                        }}>Watch</li>
                    </ul>
                
            </div>
            </div>
        <div className='flex  gap-16 flex-wrap ' >
            {
             
       itemlist.map((c)=>{
    
        
          return(
            <div>
                
     
       <Link to={"/products/"+c.id} >    <Card  data={c} /></Link>  
       </div>
          )  
       })
    }
        </div>
   

        </div>
    )
}

export default Electronic;
