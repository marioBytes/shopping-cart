import { createContext, useState } from 'react'
import { getProductData } from '../productsStore'

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => { },
  addItemToCart: () => { },
  removeOneFromCart: () => { },
  deleteFromCart: () => { },
  getTotalCost: () => { },
})

function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([])

  // [ { id: 1, quantity: 2 } ]
  function getProductQuantity(id) {
    const quantity = cartProducts.find(product => product.id === id)?.quantity

    if (!quantity) {
      return 0;
    }

    return quantity
  }

  function addItemToCart(id) {
    const quantity = getProductQuantity(id)

    if (quantity === 0) {
      setCartProducts([...cartProducts, { id: id, quantity: 1 }])
    } else {
      setCartProducts(
        cartProducts.map(cartProduct => (
          cartProduct.id === id
            ? { ...cartProduct, quantity: cartProduct.quantity + 1 }
            : cartProduct
        ))
      )
    }
  }

  function removeOneFromCart(id) {
    const quantity = getProductQuantity(id)

    if (quantity === 1) {
      deleteFromCart(id)
    } else {
      setCartProducts(
        cartProducts.map(cartProduct => (
          cartProduct.id === id
            ? { ...cartProduct, quantity: cartProduct.quantity - 1 }
            : cartProduct
        ))
      )
    }
  }

  function deleteFromCart(id) {
    setCartProducts(cartProducts => (
      cartProducts.filter(currentProduct => (
        currentProduct.id !== id
      )))
    )
  }

  function getTotalCost() {
    let totalCost = 0

    cartProducts.map(cartItem => {
      const productData = getProductData(cartItem.id)
      return totalCost += (productData.price * cartItem.quantity)
    })

    return totalCost
  }

  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addItemToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
  }

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
