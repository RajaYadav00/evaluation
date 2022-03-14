
let products=JSON.parse(localStorage.getItem("products"));

function display(products)
{
    document.getElementById("products_data").innerHTML=""
    products.map(function(el,index,arr){

        var name=document.createElement("p");
        name.innerText=el.name;

        var price=document.createElement("p");
         price=el.price;

         var type=document.createElement("P");
         type=el.type;

         var img=document.createElement("img");
         img.setAttribute("src",el.image);

         var  remove=document.createElement("button")
         remove.setAttribute("id","removed")
         remove.innerText="remove";

         remove.addEventListener("click",function(){
             removed(index);
         })
        let itemdiv=document.createElement("div");

        itemdiv.append(name,price,type,img,remove)
         document.querySelector("#products_data").append(itemdiv)
         
    })
}
display(products)
function show(){
    window.location.href="./index.html"
}
function removed(index)
{
    products.splice(index,1)
    localStorage.setItem("products",JSON.stringify(products))
    display(products)
}


