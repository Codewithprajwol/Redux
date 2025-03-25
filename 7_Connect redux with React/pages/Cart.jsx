import React from 'react'
import CartItem from '../components/CartItem'
import { useSelector } from 'react-redux'

 function Cart() {

  const cartItems=useSelector((state)=>state.cartItems) 

  return (
    <div className="cart-container">
      <h2>Items in Your Cart</h2>
      <div className="cart-items-container">
        <div className="cart-header cart-item-container">
          <div className="cart-item">Item</div>
          <div className="item-price">Price</div>
          <div className="quantity">Quantity</div>
          <div className="total">Total</div>
        </div>
        {cartItems.map(({ productId, title, rate, price, image, quantity }) => (
          <CartItem
            proId={productId}
            key={productId}
            title={title}
            price={price}
            quantity={quantity}
            imageUrl={image}
            rating={rate}
          />
        ))}
        <div className="cart-header cart-item-container">
          <div></div>
          <div></div>
          <div></div>
          <div className="total">${cartItems.reduce((accumulator,item)=>accumulator+(item.price * item.quantity),0)}</div>
        </div>
      </div>
    </div>
  )
}

export default Cart