var n1=0;
var n2=0;

 n1=parseInt(prompt("Ingrese el primer numero"));
 n2=parseInt(prompt("Ingrese el segundo numero"));

 while(isNaN(n1)||isNaN(n2))

{
     n1=parseInt(prompt("Solo ingresar numeros,ingrese el primer numero "));
     n2=parseInt(prompt("Ingrese el segundo numero"));
}
document.write("<h2>Calculadora</h2>")
const sumar=(n1,n2)=>
{
    var suma=n1+n2;
    document.write("<li>La Suma de "+n1+"+"+n2+" es "+suma+"</li>");
}
const resta=(n1,n2)=>
{
    var resta=n1-n2;
    document.write("<li>La Resta de "+n1+"-"+n2+" es "+resta+"</li>");
}
const multiplicar=(n1,n2)=>
{
    var mult=n1*n2;
    document.write("<li>La Multiplicacion de "+n1+"*"+n2+" es "+mult+"</li>");
}
const divison=(n1,n2)=>
{
    var div=n1/n2;
    document.write("<li>La Division de "+n1+"/"+n2+" es "+div+"</li>");
}
sumar(n1,n2);
resta(n1,n2);
multiplicar(n1,n2);
divison(n1,n2);