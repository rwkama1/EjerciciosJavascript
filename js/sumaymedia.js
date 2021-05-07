//Ultilizando un bucle, mostrar la suma y la media de los numeros introducidos
// hasta introducir un numero negativo y ahi mostrar el resultado
var numero=parseInt(prompt("Ingrese un numero"));
var suma=0;
var cantidad =0;
var promedio=0;
while(numero>0)
{
    cantidad++;
    suma=suma+numero;
    numero=parseInt(prompt("Ingrese otro numero"))

}
promedio=suma/cantidad;
document.write("La suma es: "+suma);
document.write("</br>");
document.write("El promedio es: "+promedio);