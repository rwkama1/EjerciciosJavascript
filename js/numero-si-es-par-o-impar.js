let n1=parseInt(prompt("Ingrese un numero"));

while(isNaN(n1))
{
    n1=parseInt(prompt("Por favor,ingrese un numero"));
}
if(n1%2)
{
    document.write("<h3>El numero es impar</h3>");
}
else
{
    document.write("<h3>El numero es par</h3>");
}

