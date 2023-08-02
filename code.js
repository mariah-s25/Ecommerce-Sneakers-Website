function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
    
function img1() {
  document.getElementById("current-img").src="images/image-product-1.jpg";
  document.getElementById("img1").className += " current";
  document.getElementById("img2").className = "";
  document.getElementById("img3").className = "";
  document.getElementById("img4").className = "";
}
    
function img2() {
  document.getElementById("current-img").src="images/image-product-2.jpg";
  document.getElementById("img2").className += " current";
  document.getElementById("img1").className = "";
  document.getElementById("img3").className = "";
  document.getElementById("img4").className = "";
}
    
function img3() {
  document.getElementById("current-img").src="images/image-product-3.jpg";
  document.getElementById("img3").className += " current";
  document.getElementById("img1").className = "";
  document.getElementById("img2").className = "";
  document.getElementById("img4").className = "";
}
    
function img4() {
  document.getElementById("current-img").src="images/image-product-4.jpg";
  document.getElementById("img4").className += " current";
  document.getElementById("img1").className = "";
  document.getElementById("img2").className = "";
  document.getElementById("img3").className = "";
 }
    
function plus(){
  document.getElementById("count-num").innerHTML++;    
}
    
function minus() {  
  var x = document.getElementById("count-num").innerHTML;
  if(x > 0){      
    document.getElementById("count-num").innerHTML--;
  }
  else if(x <= 0){
    document.getElementById("count-num").innerHTML = 0;
  }
}

var target = document.getElementById('current-img');
var counter = 0;
var myPictures = ["images/image-product-1.jpg",
  "images/image-product-2.jpg","images/image-product-3.jpg","images/image-product-4.jpg"]
      
function next() {
  counter += 1;
  if (counter > myPictures.length -1) {
    counter = 0;
  }
  document.getElementById("current-img").src = myPictures[counter];
}

function prev() {
  counter -= 1;
  if (counter < 0) {
    counter = myPictures.length-1;
  }
  document.getElementById("current-img").src = myPictures[counter];
}

var items = 0;
function openCart(){
  var myWindow = window.open("cart.html", "_blank");
  if(items > 0){
    myWindow.document.getElementById("counter").innerHTML = items;
    myWindow.document.getElementById("total").innerHTML = (items*125.00);
  }
  else{
    myWindow.document.getElementById("shoe").src="";
    myWindow.document.getElementById("title").innerHTML="Your cart is empty!";
    myWindow.document.getElementById("price").innerHTML="";
  }
}

function addCart(){
  var x = document.getElementById("count-num").innerHTML;
  items += x;
}

function delete(){
items=0;
myWindow.document.getElementById("shoe").src="";
myWindow.document.getElementById("title").innerHTML="Your cart is empty!";
myWindow.document.getElementById("price").innerHTML="";
}