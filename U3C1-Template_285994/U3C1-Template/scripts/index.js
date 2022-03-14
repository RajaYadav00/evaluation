//store the products array in localstorage as "products"

document.querySelector("#product_form").addEventListener("submit",info)

let products=JSON.parse(localStorage.getItem("products"))||[];

function info(event)
{
    event.preventDefault()

    var name1=document.querySelector("#name").value;
    var price1=document.querySelector("#price").value;
    var type1=document.querySelector("#type").value;
    var img1=document.querySelector("#image").value;
    obj={
        name:name1,
        price:price1,
        type:type1,
        image:img1
    }
    products.push(obj);

    localStorage.setItem("products",JSON.stringify(products))
}
document.querySelector("#show_products").addEventListener("click",function(){
    window.location.href="./inventory.html"
})
