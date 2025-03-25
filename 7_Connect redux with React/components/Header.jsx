import React from 'react'
import cartItem from '../Assets/cartItem.svg'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {
const cartItems=useSelector((state)=>(state.cartItems))

  return (
    <div className="header">
    <div className='header-inner'>
        <h1 className="name"><Link to="/">Shopyyy</Link></h1>
        <div className="cart-logo">
            <div className="cartItemNumber">{cartItems.reduce((total, item) => total + item.quantity, 0)}</div>
            <Link to='/cart' className="cartItemLogo"><img src={cartItem} alt="cart" /></Link>
        </div>
    </div>
    </div>

  )
}

export default Header