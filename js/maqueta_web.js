const body_load=()=>
{
  let nombres,apellidos
  nombres=String(window.sessionStorage.getItem("nombre"));
  apellidos=String(window.sessionStorage.getItem("apellido"));

    document.getElementById("userlogin").textContent="Bienvenido Usuario: "+nombres+" "+apellidos;
  
}

//******************************* */
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
//************************************************************************ */
const cambiar_color_red=()=>
{
  document.body.style.background="tomato";

  
  document.getElementById("div2").style.backgroundColor="tomato";
  document.getElementById("div3").style.backgroundColor="tomato";
  document.getElementById("div4").style.backgroundColor="tomato";
  document.getElementById("accordiondiv").style.backgroundColor="tomato";
  document.getElementById("acc1").style.backgroundColor="tomato";
  document.getElementById("acc2").style.backgroundColor="tomato";
  document.getElementById("acc3").style.backgroundColor="tomato";
  document.getElementById("panel1").style.backgroundColor="tomato";
  document.getElementById("panel2").style.backgroundColor="tomato";
  document.getElementById("panel3").style.backgroundColor="tomato";
  document.getElementById("canvas").style.backgroundColor="tomato";
  document.getElementById("div5").style.backgroundColor="tomato";
  document.getElementById("btn1").style.backgroundColor="tomato";
  document.getElementById("btn2").style.backgroundColor="tomato";
  document.getElementById("1h1").style.backgroundColor="tomato";
  document.getElementById("btnlogin").style.backgroundColor="tomato";
  document.getElementById("contactsubmit").style.backgroundColor="tomato";
  document.getElementById("btnfooter").style.backgroundColor="tomato";
  document.getElementById("navbar").style.backgroundColor="tomato";

;
}
const cambiar_color_green=()=>
{
  let color="mediumseagreen";
  document.body.style.background=color;

  
  document.getElementById("div2").style.backgroundColor=color;
  document.getElementById("div3").style.backgroundColor=color;
  document.getElementById("div4").style.backgroundColor=color;
  document.getElementById("accordiondiv").style.backgroundColor=color;
  document.getElementById("acc1").style.backgroundColor=color;
  document.getElementById("acc2").style.backgroundColor=color;
  document.getElementById("acc3").style.backgroundColor=color;
  document.getElementById("panel1").style.backgroundColor=color;
  document.getElementById("panel2").style.backgroundColor=color;
  document.getElementById("panel3").style.backgroundColor=color;
  document.getElementById("canvas").style.backgroundColor=color;
  document.getElementById("div5").style.backgroundColor=color;
  document.getElementById("btn1").style.backgroundColor=color;
  document.getElementById("btn2").style.backgroundColor=color;
  document.getElementById("1h1").style.backgroundColor=color;
  document.getElementById("btnlogin").style.backgroundColor=color;
  document.getElementById("contactsubmit").style.backgroundColor=color;
  document.getElementById("btnfooter").style.backgroundColor=color;
  document.getElementById("navbar").style.backgroundColor=color;


;
}
const cambiar_color_azul=()=>
{
  let color="cornflowerblue";
  document.body.style.background=color;
  //document.body.getElementsByTagName("div").backgrou
  document.getElementById("div2").style.backgroundColor=color;
  document.getElementById("div3").style.backgroundColor=color;
  document.getElementById("div4").style.backgroundColor=color;
  document.getElementById("accordiondiv").style.backgroundColor=color;
  document.getElementById("acc1").style.backgroundColor=color;
  document.getElementById("acc2").style.backgroundColor=color;
  document.getElementById("acc3").style.backgroundColor=color;
  document.getElementById("panel1").style.backgroundColor=color;
  document.getElementById("panel2").style.backgroundColor=color;
  document.getElementById("panel3").style.backgroundColor=color;
  document.getElementById("canvas").style.backgroundColor=color;
  document.getElementById("div5").style.backgroundColor=color;
  document.getElementById("btn1").style.backgroundColor=color;
  document.getElementById("btn2").style.backgroundColor=color;
  document.getElementById("1h1").style.backgroundColor=color;
  document.getElementById("btnlogin").style.backgroundColor=color;
  document.getElementById("contactsubmit").style.backgroundColor=color;
  document.getElementById("btnfooter").style.backgroundColor=color;
  document.getElementById("navbar").style.backgroundColor=color;
;
}
const cambiar_color_original=()=>
{
  let color="white";
  let color2="seagreen"
  document.body.style.background="url(../img/paisaje1.jpg)";
  document.getElementById("div2").style.backgroundColor=color;
  document.getElementById("div3").style.backgroundColor=color;
  document.getElementById("div4").style.backgroundColor=color;
  document.getElementById("accordiondiv").style.backgroundColor=color;
  document.getElementById("acc1").style.backgroundColor="#eee";
  document.getElementById("acc2").style.backgroundColor="#eee";
  document.getElementById("acc3").style.backgroundColor="#eee";
  document.getElementById("panel1").style.backgroundColor=color;
  document.getElementById("panel2").style.backgroundColor=color;
  document.getElementById("panel3").style.backgroundColor=color;
  document.getElementById("canvas").style.backgroundColor="#333";
  document.getElementById("div5").style.backgroundColor=color;
  document.getElementById("btn1").style.backgroundColor=color2;
  document.getElementById("btn2").style.backgroundColor=color2;
  document.getElementById("1h1").style.backgroundColor=color2;
  document.getElementById("btnlogin").style.backgroundColor="#333";
  document.getElementById("contactsubmit").style.backgroundColor=color2;
  document.getElementById("btnfooter").style.backgroundColor=color2;
  document.getElementById("navbar").style.backgroundColor="#333";
;
}
//******************************************************************* */
const scrolling_smooth=()=>
{
  window.location.href="#body"
}
//****************************** */
const save_sessionstorage=()=>
{
 let nombre= document.getElementById("fname").value;
  window.sessionStorage.setItem("nombre",nombre);
  let apellido= document.getElementById("lname").value;
  window.sessionStorage.setItem("apellido",apellido);
  event.preventDefault();
  cerrar_modal();
  document.getElementById("userlogin").textContent="Bienvenido Usuario: "+nombre+" "+apellido;
 

  
}
const open_modal_login=()=>
{
  document.getElementById("loginmodal").style.display="block"
}
const cerrar_modal=()=>
{
  document.getElementById("loginmodal").style.display="none";
  limpiarcampos();
}
const limpiarcampos=()=>
{
  document.getElementById("fname").value="";
  document.getElementById("lname").value="";
}
//********************************* */
// Get the modal
var modal = document.getElementById('loginmodal');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }

}
//***************************************** */

//Accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
//************************************** */
//Reloj Dinamico
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90
setInterval(drawClock, 1000);

function drawClock() {
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
  drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
  var grad;
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2*Math.PI);
  ctx.fillStyle = 'white';
  ctx.fill();
  grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
  grad.addColorStop(0, '#333');
  grad.addColorStop(0.5, 'white');
  grad.addColorStop(1, '#333');
  ctx.strokeStyle = grad;
  ctx.lineWidth = radius*0.1;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
  ctx.fillStyle = '#333';
  ctx.fill();
}

function drawNumbers(ctx, radius) {
  var ang;
  var num;
  ctx.font = radius*0.15 + "px arial";
  ctx.textBaseline="middle";
  ctx.textAlign="center";
  for(num = 1; num < 13; num++){
    ang = num * Math.PI / 6;
    ctx.rotate(ang);
    ctx.translate(0, -radius*0.85);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius*0.85);
    ctx.rotate(-ang);
  }
}

function drawTime(ctx, radius){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    //hour
    hour=hour%12;
    hour=(hour*Math.PI/6)+
    (minute*Math.PI/(6*60))+
    (second*Math.PI/(360*60));
    drawHand(ctx, hour, radius*0.5, radius*0.07);
    //minute
    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawHand(ctx, minute, radius*0.8, radius*0.07);
    // second
    second=(second*Math.PI/30);
    drawHand(ctx, second, radius*0.9, radius*0.02);
}

function drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}