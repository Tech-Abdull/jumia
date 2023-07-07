var PhoneOne = {
    phone: "Images/iphone11.png",
    name :"iphone 11",
    price : 98000,
    OriginalPrice: 102459,
    itemId:"I001" 
}

var PhoneTwo = {
    phone: "Images/iphone12pro.png",
    name :"iphone 12",
    price : 1094999,
    OriginalPrice: 132459,
    itemId:"I002" 
}

var PhoneThree = {
    phone: "Images/iphone13.png",
    name :"iphone 13",
    price : 119499,
    OriginalPrice: 152459,
    itemId:"I003" 
}

var PhoneFour = {
    phone: "Images/iphone14.png",
    name :"iphone 14",
    price : 1294999,
    OriginalPrice: 172459,
    itemId:"I004" 
}

var selectId = decodeURIComponent (window.location.search)
var selectedItem = selectId.substring(1)

if(selectedItem == PhoneOne.itemId) {
    document.getElementById("iphone11").src = PhoneOne.phone
    document.getElementById("name1").innerText = PhoneOne.name
    document.getElementById("price1").innerText = PhoneOne.price
    document.getElementById("original1").innerText = PhoneOne.OriginalPrice  
    var cost =  PhoneOne.price 
    Qty(cost)
}

else if(selectedItem == PhoneTwo.itemId){
    document.getElementById("iphone11").src = PhoneTwo.phone
    document.getElementById("name1").innerText = PhoneTwo.name
    document.getElementById("price1").innerText = PhoneTwo.price
    document.getElementById("original1").innerText = PhoneTwo.OriginalPrice
    var cost =  PhoneTwo.price 
    Qty(cost)
  
}
else if(selectedItem == PhoneThree.itemId){
    document.getElementById("iphone11").src = PhoneThree.phone
    document.getElementById("name1").innerText = PhoneThree.name
    document.getElementById("price1").innerText = PhoneThree.price
    document.getElementById("original1").innerText = PhoneThree.OriginalPrice
    var cost =  PhoneThree.price 
    Qty(cost)
}
else if(selectedItem == PhoneFour.itemId){
    document.getElementById("iphone11").src = PhoneFour.phone
    document.getElementById("name1").innerText = PhoneFour.name
    document.getElementById("price1").innerText = PhoneFour.price
    document.getElementById("original1").innerText = PhoneFour.OriginalPrice
    var cost =  PhoneFour.price 
    Qty(cost)
}

function Qty(cost) {
    document.getElementById("quantity").onkeyup = function (){
       let  quantity = document.getElementById("quantity").value
        let amount = cost
        if(quantity > 1){

            total = quantity * amount
            document.getElementById("total").innerText = total
            UserLocation(total)
        }
       else if(quantity == 1){
        total = amount
        document.getElementById("total").innerText = total
        UserLocation(total)
    }

}
}

// function delivery(cost){
//     document.getElementById("quantity").onkeyup = function(){
//         let  quantity = document.getElementById("quantity").value
//         let amount = cost
//         let Karen = 500
//         let Muthaiga = 600
//         let Machakos = 800
//         if(location == Karen ){
//             total = quantity * amount
//             totalAmount = total + "Karen"
//             document.getElementById("totalAmount").innerText = totalAmount
//         }

//     }
// }
    
function UserLocation(total){
    document.getElementById("location").onchange = function(){
        let delivery = document.getElementById("location").value
        let Karen = 500
        let Muthaiga = 300
        let Machakos = 600

        if (delivery == "Karen" ){
            document.getElementById("total").innerText = Karen + total
        }
        else if (delivery == "Muthaiga"){
            document.getElementById("total").innerText = Muthaiga + total
        }
        else if (delivery == "Machakos"){
            document.getElementById("total").innerText = Machakos + total
        }
        else if (delivery == " "){
            document.getElementById("total").innerText = total
        }


    }

}
  