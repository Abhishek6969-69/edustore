import React from 'react'

function Beautycard(props) {
       
    return (
        <div class="w-96  h-72 hover:shadow-xl  rounded-lg ">

        <img className=' w-36 mx-20' src={props.val.formattedImageUrl} />
        <div className=' mx-10'>
        <h3 className=' mx-20'>{props.val.brand}</h3>
        <p className=' mx-20'>price: {props.val.formattedListPrice?props.val.formattedListPrice:props.val.
formattedPriceV2
} </p>
<p className=' mx-20 '>offer:{props?.val?.dealBadge?.labelText?props?.val?.dealBadge?.labelText:"No offer"
}</p>

<p className='mx-20'>Rating: {props.val.starCount}⭐️ </p>

</div>



            </div>
       
    )
}

export default Beautycard
