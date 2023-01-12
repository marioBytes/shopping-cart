import React, { useState } from 'react'
import { Button, Container, Navbar, Modal } from 'react-bootstrap'

const NavbarComponent = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <Navbar expand="sm">
        <Navbar.Brand href='/'>Shopping Cart</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
          <Button onClick={() => setShow(true)}>Cart 0 Items</Button>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>This is the modal body</h1>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default NavbarComponent
