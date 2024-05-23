import React from 'react'
import { UseDispatch, useDispatch } from 'react-redux'
import { addUsers } from '../store/slice/userslice';
function Beautycard(props) {
    
    return (
        <div class="w-80  h-72 hover:shadow-xl  rounded-lg ">
{/* {console.log(props)} */}
        <img className=' w-36 m-auto' src={props.val.formattedImageUrl} />
        <h3 className=' mx-20'>{props.val.brand}</h3>
        <p className=' mx-20'>price: {props.val.formattedListPrice?props.val.formattedListPrice:props.val.
formattedPriceV2
} </p>
<p className=' mx-20 '>offer:{props?.val?.dealBadge?.labelText?props?.val?.dealBadge?.labelText:"No offer"
}</p>

<p className='mx-20'>Rating: {props.val.starCount}⭐️ </p>



            </div>
       
    )
}

export default Beautycard
