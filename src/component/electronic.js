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
        // console.log(json1);
        setitemlist(json1);
        setlist(json1);
       }
     useEffect(()=>{
      fetchapi();
    },[]);
    
    return (
        <div className='flex justify-normal '>
            <div className='border    w-80   h-96 p-2  m-24 '>
                <div className='m-6'>
                    <h1 className='m-6'>Category</h1>
                    <ul className=''> 
                        <li className='m-6 hover:cursor-pointer'  onClick={()=>{
                             
                                setitemlist(list);
                        }} >All</li>
                        <li  className='m-6 hover:cursor-pointer' onClick={()=>{
                             const  list1= list.filter((f)=>{
                                    return f.category==="mobile";
                                }
                               
                                )
                                setitemlist(list1);
                        }}>Mobile</li>
                        <li  className='m-6 hover:cursor-pointer'  onClick={()=>{
                             const  list1= list.filter((f)=>{
                                    return f.category==="laptop";
                                }
                               
                                )
                                setitemlist(list1);
                        }}>Laptop</li>
                        <li  className='m-6 hover:cursor-pointer'  onClick={()=>{
                             const  list1= list.filter((f)=>{
                                    return f.category==="accessories";
                                }
                               
                                )
                                setitemlist(list1);
                        }}>Accessories</li>
                        <li  className='m-6 hover:cursor-pointer'  onClick={()=>{
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
                
      { console.log(c)}
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
