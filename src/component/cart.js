import React from "react";
import {  useDispatch, useSelector } from "react-redux";

import { clearalluser, removeuser } from "../store/slice/userslice";


function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((store) => {
    return store.user;
  });
 
  let [total, settotal] = [0];
 
  return (
    <div className="mx-8   md:flex gap-4  ">
      <div>
        <div className="flex items-center justify-center">
          <h1 className="  font-extrabold text-2xl ">Cart</h1>
        </div>

        <div className="flex items-center justify-center gap-7">
          <div>
            <h3>{cart.length===0?"":cart.length}</h3>
          </div>
          <div
            onClick={() => {
              dispatch(clearalluser());
            }}
          >
            Remove
          </div>
        </div>

        {cart.map((m) => {
          return (
            <div className="w-[250px] my-4  md:flex  gap-6 p-6 border items-center  md:w-[650px]     relative ">
              <div>
                <img className="  rounded-lg w-48" src={m.image[0].url} alt="cart img" />
              </div>
              <div>
                <h3 className="  font-bold">{m.name}</h3>
                <h3 className=" capitalize">{m.category}</h3>
                <p className=" font-bold  text-medium">₹{m.price}</p>
              </div>
              <div className="md:flex gap-3 md:ml-14">
                <div>
                  <p>QTY: {m.qty}</p>
                </div>
              </div>

              {
                <div className=" hidden ">
                  {" "}
                  {(total = total + m.qty * m.price)}
                </div>
              }
              <div className=" md:inline-block  ">
                <button
                  className="border mr-20 mt-12 md:mr-0 md:mt-0 md:ml-0 absolute    bg-[#023E8A] rounded-xl p-3 md:absolute right-3 top-14 text-white "
                  onClick={() => {
                    dispatch(removeuser(m.id));
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {
        total?
      <div className="   md:w-1/4 mt-2 ">
        <div className="  h-14 w-6/12    flex gap-16 items-center ml-2"></div>
     
        <div className=" border   p-4  ">
          <p>Price detail</p>
          <div className=" flex  gap-24">
            <div>
              <h1>Total MRP</h1>
            </div>
            <div>
              <h1>₹{total}</h1>
            </div>
          </div>
          <div className=" flex  gap-12">
            <div>
              <h1>Coupon Discount</h1>
            </div>
            <div>
              <h1>Apply Coupon</h1>
            </div>
          </div>
          <div className=" flex  gap-24">
            <div>
              <h1>Platform Fee</h1>
            </div>
            <div>
              <h1>FREE</h1>
            </div>
          </div>
          <div className=" flex  gap-24">
            <div>
              <h1>Shipping Fee</h1>
            </div>
            <div>
              <h1>FREE</h1>
            </div>
          </div>
        </div>
      </div>:""
}
      
    </div>
  );
}

export default Cart;
