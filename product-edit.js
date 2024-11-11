const titleELM=document.querySelector('#product-title')
const priceELM=document.querySelector('#product-price')
const removeELM=document.querySelector('#remove-product')

const productId= location.hash.substring(1)
let products=getproducts() 
let product=products.find(function(item){
  return item.id===productId
})
if (product===undefined){
   location.assign('./index.html')
}
titleELM.value=product.title
priceELM.value=product.price

titleELM.addEventListener('input',function(e){
  product.title = e.target.value
  saveproducts(products)
})
priceELM.addEventListener('input',function(e){
  product.price = e.target.value
  saveproducts(products)
})
removeELM.addEventListener('click',function(e){
    removeproudcts(product.id)
    saveproducts(products)
    location.assign('./index.html')
})

window.addEventListener('storage',function(e){
 if (e.key==='faza'){
  products=JSON.parse(e.newValue)
  product=products.find(function(item){
    return item.id===productId
  })
    if (product===undefined){
     location.assign('./index.html')
    }
  titleELM.value=product.title
  priceELM.value=product.price
 }
})
