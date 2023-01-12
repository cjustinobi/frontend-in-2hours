import { products } from './data.js'

const carts = localStorage.getItem('carts') ?
  JSON.parse(localStorage.getItem('carts')) : []

export const addItem = item => {

  if (carts.length)  {

    const productFound = carts.find(product => product.id == item.id )

    if (productFound) {

      // Get the index of found product.
      const productIndex = products.findIndex(itm => itm.id == productFound.id)


      productFound.qty ++
      productFound.subTotal = productFound.qty * productFound.price

      // Update the carts
      carts[productIndex] = productFound
    } else {
      item.qty = 1
      item.subTotal = item.qty * item.price

      carts.push(item)

    }

     // Persist data
    localStorage.setItem('carts', JSON.stringify(carts))


  } else {
    item.qty = 1
    item.subTotal = item.qty * item.price

    carts.push(item)

    // Persist data
    localStorage.setItem('carts', JSON.stringify(carts))
  }


}

console.log(carts)