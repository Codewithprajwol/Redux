import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { additems } from '../store/cartItemReducer'

function Products({productId,title,rate,price,image}) {
    const dispatch=useDispatch()
  return (
   
   <div className="product_Container" >
    <div className="product_image_container">
        <img src={image} alt="images" />
    </div>
    <h3 className='title'>{title}</h3>
    <div className="rating_Price">
        <div className="rating">{rate} ★★★★★</div>
        <div className="price"><b>$ {price}</b></div>
    </div>
    <div className="btn-container">
        <div onClick={()=>{dispatch(additems({productId,title,rate,price,image}))}} className="addCartContainer">Add to cart</div>
        <div className="BuyCartContainer">Buy Now</div>
    </div>
   </div>
   
  )
}

export default Products