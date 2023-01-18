import { products } from './data.js'

export const carts = localStorage.getItem('carts') ?
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
  setCartCount()

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


export const increment = id => {
  const cartIndex = carts.findIndex(item => item.id == id)

  carts[cartIndex].qty++

  // Update the UI
  document.getElementById(`qty-${id}`).innerText = carts[cartIndex].qty
  setCartCount()

  // Persist data
  localStorage.setItem('carts', JSON.stringify(carts))
}

export const decrement = id => {
  const cartIndex = carts.findIndex(item => item.id == id)

  if (carts[cartIndex].qty === 1) return

  carts[cartIndex].qty--

  // Update the UI
  document.getElementById(`qty-${id}`).innerText = carts[cartIndex].qty
  setCartCount()

  // Persist data
  localStorage.setItem('carts', JSON.stringify(carts))
}

export const setCartCount = () => {
  document.getElementById('cart').innerHTML = `Cart ${cartCount()}`
}