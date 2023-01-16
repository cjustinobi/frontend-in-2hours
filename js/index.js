
import { products } from './data.js'
import { addItem, setCart } from './cart.js'

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
  setCart()

})

document.addEventListener("click", function(e){

  const target = e.target

  if (target.id == 'cart') {

    let el = document.getElementById('cart-modal')
    el.style.width = '50%'

  } else if(target.id.includes('item')) {

    const productId = target.id.split('-')[1]

    const product = products.find(item => item.id == productId)

    addItem(product)
  }



});

