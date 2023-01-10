
import { products } from './data.js'

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
           <button>Add To Cart</button>
         </div>
       </div>
      `
    })

    prods.innerHTML = div
  }
}

window.addEventListener(`load`, (event) => {

  renderProducts()

})

