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
  setCart()

}

const cartCount = () => {
  if (carts.length) {
    let count = 0
    carts.forEach(item => {
      count += item.qty
    })
    return count
  }
  return 0
}

export const setCart = () => {
  document.getElementsByClassName('AddCart')[0].innerHTML = cartCount()
}