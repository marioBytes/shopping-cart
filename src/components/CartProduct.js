import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'

import { CartContext } from '../context/cartContext'
import { getProductData } from '../productsStore'

const CartProduct = ({ product }) => {
  const cart = useContext(CartContext)
  const productData = getProductData(product.id)

  return (
    <>
      <h3>{productData.title}</h3>
      <p>{product.quantity}</p>
      <p>${(product.quantity * productData.price).toFixed(2)}</p>
      <Button size="sm" onClick={() => cart.deleteFromCart(product.id)}>Remove</Button>
      <hr />
    </>
  )
}

export default CartProduct
