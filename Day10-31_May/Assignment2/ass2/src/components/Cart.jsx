import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export const Cart = () => {
  const { addToCart } = useContext(CartContext)
  return (
    <div>Cart
        <button onClick={addToCart}>add to cart</button>
    </div>
  )
}
