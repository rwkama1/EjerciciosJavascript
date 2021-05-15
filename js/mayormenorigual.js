// var n1=0;
// var n2=0;

//  n1=parseInt(prompt("Ingrese el primer numero"));
//  n2=parseInt(prompt("Ingrese el segundo numero"));


// while(n1<1||n2<1||isNaN(n1)||isNaN(n2))
// //Verifica q lo ingresado sea un numero y no sea menor a 1
// {
//      n1=parseInt(prompt("Solo numeros positivos, Vuelva a ingresar el primer numero "));
//      n2=parseInt(prompt("Ingrese el segundo numero"));
// }
// if(n1>n2)
// {
//     document.write("El primer numero es mayor que el segundo");
    
// }
// if(n1<n2)
// {
//     document.write("El segundo numero es mayor que el primero");
    
// }
// if(n1===n2)
// {
//     document.write("Los 2 numeros ingresados son iguales");
// }
const mayor_o_menor=()=>
{
    let n1,n2;

n1=parseInt(document.getElementById("primernumero").value);
n2=parseInt(document.getElementById("segundonumero").value);
event.preventDefault();
if(n1>n2)
{
    document.getElementById("hnumero").textContent="El primer numero es mayor que el segundo";

    
}
if(n1<n2)
{
    document.getElementById("hnumero").textContent="El segundo numero es mayor que el primero";

   
    
}
if(n1===n2)
{
    document.getElementById("hnumero").textContent="Los 2 numeros ingresados son iguales";

}
document.getElementById("primernumero").value="";
document.getElementById("segundonumero").value="";
}


