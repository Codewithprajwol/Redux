import React from 'react'
import { useDispatch } from '../react-redux'
import { decreaseItemsQuantity, deleteitems, increaseItemsQuantity } from '../store/slices/CartItemSlice'

function CartItem({proId, title, rating, price, imageUrl, quantity }) {
  const dispatch=useDispatch()
    return (
      <div className="cart-item-container">
        <div className="cart-item">
          <img src={imageUrl} alt={title} />
          <div>
            <h3>{title}</h3>
            <p>{rating} ★ ★ ★ ★</p>
          </div>
        </div>
        <div className="item-price">${price}</div>
        <div className="item-quantity">
          <button onClick={()=>{dispatch(decreaseItemsQuantity(proId))}}>-</button>
          <span>{quantity}</span>
          <button onClick={()=>{dispatch(increaseItemsQuantity(proId))}}>+</button>
          <button onClick={()=>{dispatch(deleteitems(proId))}}>remove</button>
        </div>
        <div className="item-total">${quantity * price}</div>
      </div>
    )
  }

export default CartItem