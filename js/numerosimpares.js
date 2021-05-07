// Mostrar todos los numeros impares entre 2 numeros
var n1=0;
var n2=0;

 n1=parseInt(prompt("Ingrese el primer numero"));
 n2=parseInt(prompt("Ingrese el segundo numero"));

while(n1<n2)
{
    if(n1%2)
    {
        document.write("<br>");
        document.write(n1);
    }
   n1++;

}

