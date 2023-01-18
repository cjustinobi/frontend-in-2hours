
import { products } from './data.js'
import {
  carts,
  addItem,
  setCartCount,
  increment,
  decrement
} from './cart.js'

const prods = document.getElementById('products')

const renderProducts = () => {
  let div = ''

  if (products.length) {
    products.forEach(product => {
      div += `
        <div class="product">
         <img src="img/${product.img}" alt="app product">
         <div>
          <p>${product.name}</p>
          <p>${product.price}</p>
           <button id="item-${product.id}">Add To Cart</button>
         </div>
       </div>
      `
    })

    prods.innerHTML = div
  }
}

window.addEventListener(`load`, (event) => {

  renderProducts()
  setCartCount()

})

document.addEventListener("click", function(e){

  const target = e.target

  if (target.id == 'cart') {

    // Displays the cart modal.
    let cartModal = document.getElementById('cart-modal')
    cartModal.style.width = '50%'

    // Populate the modal.
    if (carts.length) {

      let cartItems = ''

      carts.forEach(product => {

        cartItems += `
        <div class="cart-item">
         <img width="100px" src="img/${product.img}" alt="app product">
         
         <div>
           <h3 class="cart-name">${product.name}</h3>
           <p class="cart-price">${product.price}</p>
         </div>
         
         <div class="add-minus">
          <span class="add add-qty-${product.id}">&plus;</span>
          <span id="qty-${product.id}">${product.qty}</span>
          <span class="minus minus-qty-${product.id}">&minus;</span>
         </div>
         
         <div> 
          <p>${product.subTotal}</p>
           <button id="cart-${product.id}">Remove</button>
         </div>
       </div>
      `
      })

      cartModal.innerHTML = cartItems

      let subTotal = document.createElement('div')
      subTotal.setAttribute('class', 'cart-item')
      subTotal.innerHTML = '<span class="cart-subtotal">300000</span>'

      cartModal.appendChild(subTotal)

    } else {
      cartModal.innerText = 'No item added to cart'
    }


  } else if(target.id.includes('item')) {

    const productId = target.id.split('-')[1]

    const product = products.find(item => item.id == productId)

    addItem(product)

  } else if (target.className.includes('-qty')) {
    // Get the class name
    let className = target.className.split(' ').pop()
    const state = className.split('-')[0]
    const id = className.split('-')[2]

    if (state === 'add') {
      return increment(id)
    }
    return decrement(id)
  }



});

