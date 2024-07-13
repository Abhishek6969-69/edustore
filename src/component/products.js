import React from "react";
import { useEffect, useState } from "react";
import { Card_API } from "../utils/constant";
import { useParams } from "react-router-dom";

import { useDispatch } from "react-redux";
import { addUsers } from "../store/slice/userslice";


function Products() {
  const { productId } = useParams();

  // const caritem=useSelector((store)=>store.cart.items)
  const [listitem, setlistitem] = useState({});
  const dispatch = useDispatch();
 

  const [productData, setproductData] = useState([]);
  const [otherdata, setotherdata] = useState([]);

  const fetchapi2 = async () => {
    const data2 = await fetch(Card_API + productId);
    const json2 = await data2.json();
    
    setproductData(json2.image);
    setotherdata(json2);
    setlistitem(json2);
  };

  useEffect(() => {
    fetchapi2();
  }, []);
  const additemhandle = () => {
    dispatch(addUsers(otherdata, 1));
  };
  

  return (
    <div className=" w-[420px] md:w-screen   md:mt-0  md:flex  md:mx-0 ">
      <div className="-px-2  md:flex md:flex-wrap  md:w-[8/12] md:gap-2 md:my-16 md:h-screen">
        {productData &&
          productData.map((p) => {
            return (
              <div className="  ">
                <img className="w-[380px] my-3  mx-[5px]  md:w-80  md:h-96 object-cover" src={p.url} alt="product"></img>
              </div>
            );
          })}
      </div>
      <div className=" pl-8 md:pl-0 md:w-6/12 my-16  ">
        <h3 className="mx-8 md:mx-0   font-bold">
          {otherdata.company && otherdata.company.toUpperCase()}
        </h3>
        <p className="mx-8 md:mx-0">{otherdata.name && otherdata.name}</p>
        <div className=" w-56 h-10   flex items-center  gap-1">
          <div className="mx-8 md:mx-0 flex ">
            <h1>{otherdata?.stars} </h1>
            <img
              className=" w-7 " alt="img"
              src="https://as1.ftcdn.net/v2/jpg/04/21/45/54/1000_F_421455445_QnmwPOsojdXMUrnm7LGUoPgKA2xZyHNF.jpg"
            />
          </div>
          <div>
            <h1 className=" mx-[-24px] md:mx-0">|{otherdata?.reviews}Reviews</h1>
          </div>
        </div>
        <div className="mx-4 w-6/12 border border-t-2 m-2 border-gray-400 md:mx-0"></div>
        <h1 className=" mx-4 md:mx-0  font-bold   text-xl">₹{otherdata?.price}</h1>
        <p className=" mx-4 md:mx-0 text-[#023E8A]">inclusive of all taxes</p>
        <p className="mx-4 w-[300px] md:mx-0  text-gray-600">{otherdata?.description}</p>
        <div className=" flex md:gap-2">
          <button
            className="mx-4 my-5 md:mx-0  w-32 py-[4px] mt-16 rounded-md  text-sm bg-[#023E8A] md:w-48 md:p-6 md:rounded-lg md:my-6  text-white"
            onClick={() => {
              additemhandle();
            }}
          >
            Add to Bag
          </button>
          <button className=" border-2  w-28 mx-5 my-5 mt-16  p-4 rounded-md  border-[#023E8A] md:w-48 md:p-2 md:rounded-xl md:my-6 ">
            whishlist
          </button>
        </div>
        <div>
          <div>
            <div>
              <p>{otherdata.qty}</p>
             
            </div>
            <div className="flex gap-3">
              
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
