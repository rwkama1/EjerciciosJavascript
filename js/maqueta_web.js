//Slide de imagenes
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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
}
const cambiar_color_red=()=>
{
  document.body.style.background="tomato";
  //document.body.getElementsByTagName("div").backgrou
  document.getElementById("div1").style.background="tomato";
  document.getElementById("div2").style.background="tomato";
  document.getElementById("div3").style.background="tomato";
  document.getElementById("div5").style.backgroundColor="tomato";
  document.getElementById("btn1").style.backgroundColor="tomato";
  document.getElementById("btn2").style.backgroundColor="tomato";
  document.getElementById("1h1").style.backgroundColor="tomato";
  document.getElementById("navbar").style.backgroundColor="tomato";

;
}
const cambiar_color_green=()=>
{
  let color="mediumseagreen";
  document.body.style.background=color;
  //document.body.getElementsByTagName("div").backgrou
  document.getElementById("div1").style.background=color;
  document.getElementById("div2").style.background=color;
  document.getElementById("div3").style.background=color;
  document.getElementById("div5").style.backgroundColor=color;
  document.getElementById("btn1").style.backgroundColor=color;
  document.getElementById("btn2").style.backgroundColor=color;
  document.getElementById("1h1").style.backgroundColor=color;
  document.getElementById("navbar").style.backgroundColor=color;


;
}
const cambiar_color_azul=()=>
{
  let color="cornflowerblue";
  document.body.style.background=color;
  //document.body.getElementsByTagName("div").backgrou
  document.getElementById("div1").style.background=color;
  document.getElementById("div2").style.background=color;
  document.getElementById("div3").style.background=color;
  document.getElementById("div5").style.backgroundColor=color;
  document.getElementById("btn1").style.backgroundColor=color;
  document.getElementById("btn2").style.backgroundColor=color;
  document.getElementById("1h1").style.backgroundColor=color;
  document.getElementById("navbar").style.backgroundColor=color;
;
}
const cambiar_color_original=()=>
{
  let color="white";
  document.body.style.background="url(../img/paisaje1.jpg)";
  //document.body.getElementsByTagName("div").backgrou
  document.getElementById("div1").style.background=color;
  document.getElementById("div2").style.background=color;
  document.getElementById("div3").style.background=color;
  document.getElementById("div5").style.backgroundColor=color;
  document.getElementById("btn1").style.backgroundColor="seagreen";
  document.getElementById("btn2").style.backgroundColor="seagreen";
  document.getElementById("1h1").style.backgroundColor="seagreen";
  document.getElementById("navbar").style.backgroundColor="#333";
;
}