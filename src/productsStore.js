const products = [
  {
    id: 1,
    title: 'Shirt',
    price: 4.99
  },
  {
    id: 2,
    title: 'Sunglasses',
    price: 9.99
  },
  {
    id: 3,
    title: 'Camera',
    price: 49.99
  },
]

function getProductData(id) {
  let productData = products.find(p => p.id === id)

  if (!productData) {
    console.error('Product Data does not exists for ID: ' + id)
    return undefined
  }

  return productData
}

export { products, getProductData }
