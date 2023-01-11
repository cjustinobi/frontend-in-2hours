
import { products } from './data.js'

const prods = document.getElementById('products')
const modal = document.getElementById('modal-class')


prods.onclick  = () =>{
  modal.style.display="block"
  prods.style.opacity=("0.1")

}
modal.onclick = () => {
  modal.style.display ="none"
  prods.style.opacity=("1")

} 

const test = val => {
  debugger
  alert(val)
}


const rendermodal = () =>{
  // const prod = data.map( item =>{
  //   return item
  // })
  let mode= ''
 let  modal1 =`<img src="img/${products.img}" alt="app product">
    <div class="product-detail-modal">
    <p>${products.name}</p>
       <p>you just purcharsed it for ${products.price}</p>
       <button  class="success" id="btn1">succefully Added to your Cart</button>
    </div>`
    mode +=modal1
    modal.innerHTML = mode
  }

const renderProducts = () => {
  let div = ''

  if (products.length) {
    products.forEach(product => {
      div += `
        <div class="product">
         <img src="img/${product.img}" alt="app product">
         <div class="product-detail">
          <p>${product.name}</p>
          <p>${product.price}</p>
           <button class="cart-btn" id="${product.id}">Add To Cart</button>
         </div>
       </div>
      `
    })

    prods.innerHTML = div
  }
  
}

window.addEventListener(`load`, (event) => {

  renderProducts()
  rendermodal()
  

})

