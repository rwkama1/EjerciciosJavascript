// Hacer un programa que muestre todos los numeros 
//ente dos numeros introducidos por 
// el usuario
var n1=0;
var n2=0;

 n1=parseInt(prompt("Ingrese el primer numero"));
 n2=parseInt(prompt("Ingrese el segundo numero"));

while(n1<n2)
{
   document.write("<br>");
   document.write(n1++);
}
