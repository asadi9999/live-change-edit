const getproducts=function(){
    const productJSON=localStorage.getItem('faza')
    if(productJSON !==null){
        return JSON.parse(productJSON)
    }else{
        return[]
    }
} 

const saveproducts=function(products){
    localStorage.setItem('faza',JSON.stringify(products)) 
}

const removeproudcts=function(id){
    const productIndex=products.findIndex(function(item){
        return item.id===id
    })
    if (productIndex > -1){
        products.splice(productIndex, 1)
    }
}

const toggleproduct = function(id){
 const productFind=products.find(function(item){
    return item.id===id
 })
 if (productFind !== undefined){
    productFind.mojodi =!productFind.mojodi
 }
}

const renderProducts=function(mahsol,jostejo){
    let filtermahsols=products.filter(function(item){
        return item.title.toLowerCase().includes(filters.searchItem.toLocaleLowerCase())
    })
     filtermahsols=filtermahsols.filter(function(item){
        if (filters.activeedchekbox){
            return item.mojodi
        }else{
            return true
        }
     })
    document.querySelector('#product').innerHTML=''
    filtermahsols.forEach(function(item){
    document.querySelector('#product').appendChild(cerateDom(item))
    // console.log(item);
    })
} 

const cerateDom=function(count){
    const productElement=document.createElement('div')
    productElement.classList.add("single")
    const chekbox=document.createElement('input')
    const productmojodi=document.createElement('span')
    const productName=document.createElement('a')
    productName.classList.add("taga")
    const productPrice=document.createElement('span')
    const removebutt=document.createElement('button')
    productPrice.classList.add('test')
    //...............................................................
    chekbox.setAttribute('type','checkbox')
    chekbox.checked = !count.mojodi
    productElement.appendChild(chekbox)
    chekbox.addEventListener('change',function(){
        toggleproduct(count.id)
        saveproducts(products)
        renderProducts(products,filters)
    })
    productmojodi.textContent=`${count.mojodi} موجودی`
    productElement.appendChild(productmojodi)
    productName.textContent=`product :${count.title}` 
    productName.setAttribute('href',`./product-edit.html#${count.id}`)
    productElement.appendChild(productName)
    productPrice.textContent=`price: ${count.price} تومان`
    productElement.appendChild(productPrice)
   
    removebutt.textContent='X'
    productElement.appendChild(removebutt)
    removebutt.addEventListener('click',function(){
        removeproudcts(count.id)
        saveproducts(products)
        renderProducts(products,filters)
    })
    return productElement 
}
