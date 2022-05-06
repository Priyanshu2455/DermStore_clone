import {bio_products,brand_products,blog_product}  from "../module/data.js"

console.log(bio_products)


var product_cont = document.querySelector(".boi_scroll")
bio_products.forEach((el,i)=>{
    let div =document.createElement("div")
    let img = document.createElement("img")
    let product = document.createElement("p")
    let price = document.createElement("p")
    let code = document.createElement("p")
    let btn=document.createElement("button")
        btn.innerText="QUICK BUY";
        btn.setAttribute("class","quickbuy")
    img.src= el.src
    product.textContent = el.disp
    product.classList.add("discription")
    price.innerHTML = `${el.price}<strong>${el.sale}</strong>`
    code.innerHTML =`${el.discount}<strong>${el.code}</strong>`
    div.value = i
    div.addEventListener("click", product_page)
    div.classList.add("product")
    div.append(img,product,price,btn)
    product_cont.append(div)
})

document.querySelector(".up").onclick = ()=>{
product_cont.scrollBy({
    top: 0,
    left: -600,
    behavior: 'smooth'
  });
}
document.querySelector(".downn").onclick = ()=>{
    product_cont.scrollBy({
        top: 0,
        left: 600,
        behavior: 'smooth'
      });
}
product_cont.onscroll = () =>{
    console.log(event.srcElement.scrollLeft);
    if(event.srcElement.scrollLeft == 0){
        document.querySelector(".up").style.display = "none"
        document.querySelector(".downn").style.display = "block"
    } else{
        document.querySelector(".up").style.display = "block"
    }
    if(event.srcElement.scrollLeft > 900){
        document.querySelector(".up").style.display = "block"
        document.querySelector(".downn").style.display = "none"
    }else{
        document.querySelector(".downn").style.display = "block"
    }
    console.log(event.srcElement.scrollLeft);

}


var brand_cont = document.querySelector(".brand_scroll")
brand_products.forEach((el,i)=>{
    let div =document.createElement("div")
    let img = document.createElement("img")
    let product = document.createElement("h3")
    let price = document.createElement("p")
    let code = document.createElement("p")
    let small = document.createElement("small")
    let btn=document.createElement("button")
        btn.innerText="QUICK BUY";
        btn.setAttribute("class","quickbuy")
    img.src= el.src
    code.textContent = el.disp
    code.classList.add("brand_discription")
    product.textContent = el.head
    div.value = i
    div.addEventListener("click", product_page)
    price.innerHTML = el.price
    small.innerHTML =el.discount
    div.classList.add("brand_product")
    div.append(img,product,price,btn)
    brand_cont.append(div)
})

document.querySelector("#up").onclick = ()=>{
    brand_cont.scrollBy({
        top: 0,
        left: -800,
        behavior: 'smooth'
      });
    }
    document.querySelector("#downn").onclick = ()=>{
        brand_cont.scrollBy({
            top: 0,
            left: 800,
            behavior: 'smooth'
          });
    }
    brand_cont.onscroll = () =>{
        if(event.srcElement.scrollLeft == 0){
            document.querySelector("#up").style.display = "none"
            document.querySelector("#downn").style.display = "block"
        } else{
            document.querySelector("#up").style.display = "block"
        }
        if(event.srcElement.scrollLeft > 1000){
            document.querySelector("#up").style.display = "block"
            document.querySelector("#downn").style.display = "none"
        }else{
            document.querySelector("#downn").style.display = "block"
        }
        console.log(event.srcElement.scrollLeft);
    
        //
    }


    var blog_cont = document.querySelector(".blog_scroll")
blog_product.forEach((el)=>{
    let div =document.createElement("div")
    let img = document.createElement("img")
    let name = document.createElement("p")
    let small = document.createElement("small")
    img.src= el.img
    name.textContent = el.name
    small.textContent = el.date
    div.classList.add("blog_product")
    div.append(img,name,small)
    blog_cont.append(div)
})
document.querySelector("#blog_up").onclick = ()=>{
    blog_cont.scrollBy({
        top: 0,
        left: -320,
        behavior: 'smooth'
      });
    }
    document.querySelector("#blog_downn").onclick = ()=>{
        blog_cont.scrollBy({
            top: 0,
            left: 320,
            behavior: 'smooth'
          });
    }




function product_page(event){
    let i = event.currentTarget.value
    let data_file = event.currentTarget.classList.value
    if(data_file == "product"){
        data_file = "bio_products"
    }
    if(data_file == "brand_product"){
        data_file ="brand_products"
    }
    console.log(data_file);
   location.href = `./product-cream.html?i=${i}&file=${data_file}`
}