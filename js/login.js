var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
/*// animation
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
 */






var user="Ahmed";
var puser="1234";

var admin="Adel";
var padmin="5678";


function check()
{
   var user="Ahmed";
   var puser="1234";

   var admin="Adel";
   var padmin="5678";

   var x=document.getElementById("username").value;
   var y=document.getElementById("password").value;
   if(x==user && y==puser)
   {
     alert("Hello "+x)
     window.location.assign("./Home.html")
     let USER=true;
     let ADMIN=false;
     localStorage.setItem('isUser',USER);
     localStorage.setItem('isAdmin',ADMIN);
   }
   else if(x==admin && y==padmin)
   {
     alert("Hello Admin "+x)
     window.location.assign("./Admin.html")
     let USER=false;
     let ADMIN=true;
     localStorage.setItem('isUser',USER);
     localStorage.setItem('isAdmin',ADMIN);
   }
   else
   {
     if(confirm("Not Found \nDo you want to creat a new accout ??"))
     {
       window.location.assign("Register.html")
     }
     else
     {
       window.location.assign("./Home.html")
     }

     let USER=false;
     let ADMIN=false;
     localStorage.setItem('isUser',USER);
     localStorage.setItem('isAdmin',ADMIN);
   }
}

/*function color1()
{
  newcolor1=document.getElementById("colorpicker1").value;
}
function color2()
{
  newcolor2=document.getElementById("colorpicker2").value;
}*/

//document.body.style.backgroundImage = `linear-gradient(to bottom left,newcolor1.value,newcolor2.value)`;
function setGradient() { 
  var userColor = document.getElementById('colorID').value;
  localStorage.setItem('storedValue', userColor);
  var useColor = document.getElementById('colorD').value;
  localStorage.setItem('storeValue',  useColor);
  document.body.style.background = "linear-gradient(to right," +userColor + "," + useColor + ")";
}


// if there is a value stored, update color picker and background color
// if(localStorage.getItem("storedValue")) {
  // document.getElementById('colorID').value = localStorage.getItem("storedValue");
   //document.getElementById('colorD').value = localStorage.storeValue;
   //document.body.style.background = "linear-gradient(to right," +localStorage.storedValue + "," + localStorage.storeValue + ")";
 //}
console.log(localStorage.getItem("storedValue"));
console.log(localStorage.getItem("storeValue"));
if(localStorage.isAdmin=="true")
{
  document.getElementById("b1").style.disply="none";
}
else
{
  
}

console.log(localStorage.getItem("isAdmin"));


function del(){
var x = document.getElementById("1");
var y=document.getElementById("b1")
x.style.display = "none";
y.style.display = "none";

}
function del2(){
var x = document.getElementById("2");
var y=document.getElementById("b2")
x.style.display = "none";
y.style.display = "none";

}
function del3(){
var x = document.getElementById("3");
var y=document.getElementById("b3")
x.style.display = "none";
y.style.display = "none";

}
function del4(){
var x = document.getElementById("4");
var y=document.getElementById("b4")
x.style.display = "none";
y.style.display = "none";

}
if(localStorage.isAdmin!=="true")
{
var x = document.getElementById("b1");
  x.style.display = "none";
  var x = document.getElementById("b2");
  x.style.display = "none";
  var x = document.getElementById("b3");
  x.style.display = "none";
  var x = document.getElementById("b4");
  x.style.display = "none";
}