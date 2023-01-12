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




const rendermodal = () =>{
 let  modal1 =`<img src"" alt="app product">
    <div class="product-detail-modal">
    <p>jikk</p>
       <p>you just purcharsed it for </p>
       <button  class="success" id="btn1">succefully Added to your Cart</button>
    </div>`
    modal.innerHTML=modal1
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



var removeButtonCart = document.getElementsByClassName("btn-remove")
for (var i = 0; i < removeButtonCart.length; i++){
  var button = removeButtonCart[i]
  button.addEventListener("click", (e) =>{
    var buttonclicked = e.target
    buttonclicked.parentElement.parentElement.remove()
    updateCartToal()
  })}


var QtyIput = document.getElementsByClassName("qtyInput")
  for (var i = 0; i < QtyIput.length; i++){
    const input = QtyIput[i]
    input.addEventListener('change',(e) =>{
      var click = e.target
    if(isNaN(input.value) || input.value <= 0){
      input.value = 1}
    updateCartToal()
  })}


  function updateCartToal(){
    const cartContainer = document.getElementsByClassName("cart")
    let total = 0
    for (var i = 0; i < cartContainer.length; i++){
      const cartRow = cartContainer[i]
      const priceElement = cartRow.getElementsByClassName("price")[0].innerText
      const realPrice = parseFloat(priceElement.replace('$',''))
      const Qty =cartRow.getElementsByClassName("qtyInput")[0]
      const realQty = Qty.value
      total +=(realPrice*realQty)
  }
    document.getElementsByClassName('total')[0].innerText= '$' + total
  }

  

  // var addButtonCart = document.getElementsByClassName("cartitems")
  // for (var i = 0; i < addButtonCart.length; i++){
  //   var button = addButtonCart[i]
  //   button.addEventListener("click", (e) =>{
  //     var buttonclicked = e.target
  //     const htmlCode = `
  //       <div class="cart" id="cart">
  //         <div class="cart-img">
  //           <h4>gucci bag</h4>
  //           <img src="img/logo.png" alt="my logo" class="cartImg">
  //         </div>
  //         <div>
  //           <h4 class="price" id="price">$858</h4>
  //         </div>
  //         <div>
  //           <input  class="qtyInput" type="number" value="1" style="width: 30px;">
  //           <button class="btn-remove" id="btn-remove">Remove</button>
  //         </div>
  //       </div>`
  //     buttonclicked.parentElement.append(htmlCode)
  //      updateCartToal()
  // })}


window.addEventListener(`load`, (event) => {
  renderProducts()
  rendermodal() 
  updateCartToal()
})