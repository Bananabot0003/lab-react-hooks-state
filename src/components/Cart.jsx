
import React from 'react'

const Cart = ({ cart }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>

      <ul>
        {cart.map((product, index) => (
          <li key={index}>
            {product.name} is in your cart.
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Cart
