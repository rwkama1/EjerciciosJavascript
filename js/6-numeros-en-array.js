//Trabajando con Array
let numero=0;
let numeros=0;
let array=[];
while(numeros<6)
{   
    numeros++;
    if(numeros===1)
    {
        numero=parseInt(prompt("Ingrese un numero"));
       
    }
    else
    {
        numero=parseInt(prompt("Ingrese el "+numeros+" "+"numero"));
       
    }
    while(isNaN(numero))
    {
        numero=parseInt(prompt("Ingrese solo numeros,Vuelva a ingresar el "+numeros+" "+"numero"));
    }
    array.push(numero);
   
}
const mostrar_array=(arr)=>
{
    document.write("Mostrar array: "+arr);
}
const ordernar_array_mostrarlo=(arr)=>
{
    arr.sort();
    document.write("Array Ordenado: "+arr);
}
const invertir_array=(arr)=>
{
    arr.sort();
    arr.reverse();
    document.write("Array Invertido: "+arr);
}
const cantidad_elementos=(arr)=>
{
    document.write("Cantidad de elementos: "+arr.length);
}
mostrar_array(array);
document.write("<br>");
ordernar_array_mostrarlo(array);
document.write("<br>");
invertir_array(array);
document.write("<br>");
cantidad_elementos(array);
document.write("<br>")

const busqueda_elemento_array=()=>
{
    var n=parseInt(prompt("Ingrese un numero"));
    while(isNaN(n))
    {
        n=parseInt(prompt("Solo ingresar numeros"));
    }
    const encontrar=array.find(numero=>numero===n)
    if(encontrar===undefined)
    {
        document.getElementById("busqueda_array").innerHTML="No se encontro el numero "+n;
    }
    else
    {
        document.getElementById("busqueda_array").innerHTML="Se encontro el numero "+n;
    }


   
}
