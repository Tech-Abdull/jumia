var PhoneOne = {
    phone: "Images/iphone11.png",
    name :"iphone 11",
    price : 98000,
    OriginalPrice: 102459,
    itemId:"I001" 
}
document.getElementById("iphone11").src =  PhoneOne.phone;
document.getElementById("name1").innerText = PhoneOne.name
document.getElementById("price1").innerText = PhoneOne.price
document.getElementById("original1").innerText = PhoneOne.OriginalPrice

var PhoneTwo = {
    phone: "Images/iphone12pro.png",
    name :"iphone 12",
    price : 109499,
    OriginalPrice: 132459,
    itemId:"I002" 
}

document.getElementById("iphone12").src =  PhoneTwo.phone;
document.getElementById("name2").innerText = PhoneTwo.name
document.getElementById("price2").innerText = PhoneTwo.price
document.getElementById("original2").innerText = PhoneTwo.OriginalPrice

var PhoneThree = {
    phone: "Images/iphone13.png",
    name :"iphone 13",
    price : 1194999,
    OriginalPrice: 152459,
    itemId:"I003" 
}
document.getElementById("iphone13").src =  PhoneThree.phone;
document.getElementById("name3").innerText = PhoneThree.name
document.getElementById("price3").innerText = PhoneThree.price
document.getElementById("original3").innerText = PhoneThree.OriginalPrice


var PhoneFour = {
    phone: "Images/iphone14.png",
    name :"iphone 14",
    price : 1294999,
    OriginalPrice: 172459,
    itemId:"I004" 
}
document.getElementById("iphone14").src =  PhoneFour.phone;
document.getElementById("name4").innerText = PhoneFour.name
document.getElementById("price4").innerText = PhoneFour.price
document.getElementById("original4").innerText = PhoneFour.OriginalPrice

// 

document.getElementById("phone1").onclick = function(){
    window.location.href = "Select.html" + "?" + PhoneOne.itemId
}
document.getElementById("phone2").onclick = function(){
    window.location.href = "Select.html" + "?" + PhoneTwo.itemId
}
document.getElementById("phone3").onclick = function(){
    window.location.href = "Select.html" + "?" + PhoneThree.itemId
}
document.getElementById("phone4").onclick = function(){
    window.location.href = "Select.html" + "?" + PhoneFour.itemId
}



