import React from 'react'
import { Row, Col } from 'react-bootstrap'

import ProductCard from '../components/ProductCard'
import { products } from '../productsStore'

const Store = () => {
  return (
    <>
      <Row xs={1} md={3} className='g-4'>
        {products.map(product => (
          <Col align='center' key={product.id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Store
