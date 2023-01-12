
import { products } from './data.js'
import { addItem } from './cart.js'

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
           <button id="${product.id}">Add To Cart</button>
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

document.addEventListener("click", function(e){
  const productId = e.target.id

  const product = products.find(item => item.id == productId)

  addItem(product)


});

