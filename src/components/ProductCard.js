import React, { useContext } from 'react'
import { Card, Button, Form, Row, Col } from 'react-bootstrap'

import { CartContext } from '../context/cartContext'

const ProductCard = ({ product }) => {
  const cart = useContext(CartContext)
  const productQuantity = cart.getProductQuantity(product.id)

  return (
    <Card>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
        {productQuantity > 0
          ? <>
            <Form as={Row}>
              <Form.Label column="true" sm="6">In Cart: {productQuantity}</Form.Label>
              <Col>
                <Button sm="6" className="mx-2" onClick={() => cart.addItemToCart(product.id)}>+</Button>
                <Button sm="6" className="mx-2" onClick={() => cart.removeOneFromCart(product.id)}>-</Button>
              </Col>
            </Form>
            <Button variant="danger" onClick={() => cart.deleteFromCart(product.id)}>Remove from Cart</Button>
          </>
          : <Button variant='primary' onClick={() => cart.addItemToCart(product.id)}>Add to Cart</Button>
        }
      </Card.Body>
    </Card>
  )
}

export default ProductCard
