var input = document.getElementById("secrch-box");
var btn = document.getElementById("btn-find");
var lapsList = document.getElementById("laps-list");

var list = [{
    name: "mac",
    price: 3000,
    isAvailable: true,        
    photo: "images/mac.jpg"
}, {
    name: "dell",
    price: 1500,
    isAvailable: true,        
    photo: "images/dell.jpg"
}, {
    name: "asus",
    price: 2000,
    isAvailable: false,        
    photo: "images/assus.jpg" 
}, {
    name: "lenovo",
    price: 2500,
    isAvailable: false,        
    photo: "images/lenovo.jpg"
}];       

btn.addEventListener("click" , function(){
     if(input.value != ""){
        for(var i = 0; i <= list.length; i++){
           if(list[i]["name"] == input.value){
               
           }
        }
     }
});

input.addEventListener("click", function() {
    if(event.keyCode === 3){
          btn.click();
    }
});