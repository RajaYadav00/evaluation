
cartarr=JSON.parse(localStorage.getItem("cart"))
console.log(cartarr)
function display(cartarr){

    document.getElementById("cart").innerHTML="";

    cartarr.map(function(el,index,arr){

        let box=document.createElement("div");

        let img=document.createElement("img")

        img.src=el.strMealThumb

        let name=document.createElement("p")
        name.innerText=el.strMeal

        let price=document.createElement("p");
            price.innerText=el.price

        let btn= document.createElement("button");
            btn.innerText="remove";
            btn.setAttribute("id","remove")

        btn.addEventListener("click",function(index){

            cartarr.splice(index,1);

            localStorage.setItem("cart",JSON.stringify(cartarr))
            showtotal()
            display(cartarr)
        })

        box.append(img,name,price,btn) 

        document.getElementById("cart").append(box)
    })


}

  function showtotal(){

       let total= cartarr.reduce(function(acc,el,index,arr){
            return acc +el.price
        },0)
        console.log(total)
        document.getElementById("total-price").innerText=total;
        }

showtotal()







display(cartarr)


