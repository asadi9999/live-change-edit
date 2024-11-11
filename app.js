// console.log(uuidv4())
let products=getproducts()
  
const filters={
    searchItem:'',
    activeedchekbox:false
}
renderProducts(products,filters)
document.querySelector('#search-product').addEventListener('input',function(e){
    filters.searchItem= e.target.value
    renderProducts(products,filters)
})
document.querySelector('#add-form').addEventListener('submit',function(e){
    e.preventDefault()
    const id =uuidv4() 
    products.push({
    id:id,  
    title:e.target.elements.productTitle.value,
    mojodi:prompt('enter entity'),
    price:parseFloat(prompt('enter value'))
    })
    saveproducts(products)
    renderProducts(products,filters)
    e.target.elements.productTitle.value=''    
})
document.querySelector('#activeed').addEventListener('change',function(e){
     filters.activeedchekbox=e.target.checked
     renderProducts(products,filters)
})
window.addEventListener('storage',function(e){
    if (e.key==='faza'){
        products=JSON.parse(e.newValue)
        renderProducts(products,filters)
        }   
})
   