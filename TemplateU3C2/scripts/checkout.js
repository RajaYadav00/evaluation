document.querySelector("#form").addEventListener("submit",display)

function display(event){

event.preventDefault()


      let obj={
            name:document.getElementById("name").value,
            number:document.getElementById("number").value,
            address:document.getElementById("number").value
        }

        // console.log("raja")
        console.log(obj)
        setTimeout(function(){
            if(obj!=undefined){
                alert(" 0 seconds")
            }
        },10000)
        setTimeout(function(){
            if(obj!=undefined){
                alert("Your order is accepted 3 seconds")
            }
        },3000)
        setTimeout(function(){
            if(obj!=undefined){
                alert(" Your order is being cooked 8 seconds")
            }
        },8000)
        setTimeout(function(){
            if(obj!=undefined){
                alert(":  Your order is ready 10 seconds")
            }
        },10000)
        setTimeout(function(){
            if(obj!=undefined){
                alert("Order out for delivery 12 seconds")
            }
        },12000)
        setTimeout(function(){
            if(obj!=undefined){
                alert("Order deliver")
            }
        },13000)
}


