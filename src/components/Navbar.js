import React from 'react'
import { Button, Container, Navbar, Modal } from 'react-bootstrap'

const navbar = () => {
  return (
    <Navbar expand="sm">
      <Navbar.Brand href='/'>Shopping Cart</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className='justify-content-end'>
        <Button>Cart 0 Items</Button>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default navbar
