let container=document.getElementById("menu")
let count=0;

let cartarr=JSON.parse(localStorage.getItem("cart"))||[];
async function display(){
    try {
        let res=await fetch(` https://masai-food-api.herokuapp.com/api/meals/india`)
    let data=await res.json()
    console.log(data[0].meals)
    appendfood(data[0].meals)
    } catch (error) {

        console.log("my error is",error)
        
    }
    
}

function appendfood(data){

    data.map(function(el,index,arr){

        let box=document.createElement("div");

        let img=document.createElement("img")

        img.src=el.strMealThumb

        let name=document.createElement("p")
        name.innerText=el.strMeal

        let price=document.createElement("p");
            price.innerText=el.price

         let btn=document.createElement("button")
            btn.innerText="add to cart"
            btn.setAttribute("id","addtocart")

            btn.addEventListener("click",function(){
                count++;
                
                // console.log(el)
                cartarr.push(el);

                localStorage.setItem("cart",JSON.stringify(cartarr))
                document.getElementById("count").innerText=count 
                
                // window.location.href="./cart.html"
            })
            
         document.getElementById("count").innerText=count    
       box.append(img,name,price,btn) 

       container.append(box)
    })
}

display()
