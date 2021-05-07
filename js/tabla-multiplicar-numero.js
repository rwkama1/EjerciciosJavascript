var n1=0;
n1=parseInt(prompt("Ingrese un numero"));
var numeromultplicar=0;
while(isNaN(n1))
{
    n1=parseInt(prompt("Por favor,ingrese un numero"));
}
document.write("<h1>Tabla de Multiplicar</h1>")
while(numeromultplicar<10)
{
    numeromultplicar++;
    document.write("<br>");
    document.write("<li>"+n1+"*"+numeromultplicar+"= "+ n1*numeromultplicar+"</li>");
}