import React, { useContext, useState } from 'react'
import { Button, Container, Navbar, Modal } from 'react-bootstrap'

import { CartContext } from '../context/cartContext'
import CartProduct from './CartProduct'

const NavbarComponent = () => {
  const cart = useContext(CartContext)
  const [show, setShow] = useState(false)

  const productCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)

  return (
    <>
      <Navbar expand="sm">
        <Navbar.Brand href='/'>Shopping Cart</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
          <Button onClick={() => setShow(true)}>Cart {productCount} Items</Button>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productCount > 0
            ? <>
              <p>Items in your cart</p>
              {cart.items.map(product => (
                <CartProduct key={product.id} product={product} />
              ))}
              <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>
              <Button variant="success">Purchase</Button>
            </>
            : <h1>Your cart is empty</h1>
          }
        </Modal.Body>
      </Modal>
    </>
  )
}

export default NavbarComponent
