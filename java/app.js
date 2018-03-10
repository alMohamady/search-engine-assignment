var input = document.getElementById("secrch-box");
var btn = document.getElementById("btn-find");
var lapsList = document.getElementById("laps-list");
var model = document.getElementById('overlay');
var modaElements = document.getElementById('modal-elements');

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
    photo: "images/asus.jpg" 
}, {
    name: "lenovo",
    price: 2500,
    isAvailable: false,        
    photo: "images/lenovo.png"
}];

var showingList = [];

btn.addEventListener("click" , function(){
     if(input.value != ""){
        var itemExists = false; 
        for(var i = 0; i < list.length; i++){
         if(list[i].name == input.value){
            itemExists = true;
            displayItem(list[i]);
            input.value = "";
            showingList.push(showingList[i]);
            localStorage["laps"] = JSON.stringify(showingList); 
        }
     }
     if (!itemExists){
        notAvailaple();
     }
    }   
});

function displayItem(opjectItem){
    var theItem =  "<li>";
    theItem += "<div class=\"item\">";
    theItem += "<div class=\"imgContent\">";
    theItem += "<img alt=\"" + opjectItem["name"] + "\" src=\"" + opjectItem["photo"] + "\" />"
    theItem += "</div>";
    theItem += "<div class=\"infoContent\">";
    theItem += "<div class=\"nameLine\">" + opjectItem["name"] + "</div>";
    theItem += "<div class=\"priceLine\">" + opjectItem["price"] + " $</div>";
    var productAvailability = "";
    if(list[i]["isAvailable"]){
        productAvailability = "This product is available";
    } else {
        productAvailability = "This product is not available for now try again later";
    }
    theItem += "<div class=\"availabilityLine\"><p>" + productAvailability + "</p></dic>";
    theItem += "</div></div></li>";
    lapsList.innerHTML  += theItem;
}

input.addEventListener("click", function() {
    if(event.keyCode === 3){
          btn.click();
    }
});

function notAvailaple(){
    modaElements.style.background = "url(images/errors.jpg) no-repeat center top";
    modaElements.style.color = "#f65d44";
    modaElements.textContent= "This Laptop not available!";
    model.style.display = "block"; 
} 

window.addEventListener('click', function(){
    if(event.target == model){
       model.style.display = "none";
    }
});

/*if ("laps" in localStorage){
    var loadedItems = localStorage.getItem("laps");
    showingList = JSON.parse(loadedItems);
}*/