// var n1=0;
// var n2=0;

//  n1=parseInt(prompt("Ingrese el primer numero"));
//  n2=parseInt(prompt("Ingrese el segundo numero"));

//  while(isNaN(n1)||isNaN(n2))

// {
//      n1=parseInt(prompt("Solo ingresar numeros,ingrese el primer numero "));
//      n2=parseInt(prompt("Ingrese el segundo numero"));
// }
const calcular=()=>
{
    let n1,n2;

    n1=parseInt(document.getElementById("primernumero").value);
    n2=parseInt(document.getElementById("segundonumero").value);
     sumar(n1,n2);
     resta(n1,n2);
     multiplicar(n1,n2);
     divison(n1,n2);
    event.preventDefault();
    document.getElementById("primernumero").value='';
    document.getElementById("segundonumero").value="";
}
const sumar=(n1,n2)=>
{
    var suma=n1+n2;
    document.getElementById("suma").textContent="La Suma de "+n1+"+"+n2+" es "+suma;
    
}
const resta=(n1,n2)=>
{
    var resta=n1-n2;
    document.getElementById("resta").textContent="La Resta de "+n1+"-"+n2+" es "+resta;
    
}
const multiplicar=(n1,n2)=>
{
    var mult=n1*n2;
    document.getElementById("multiplicacion").textContent="La Multiplicacion de "+n1+"*"+n2+" es "+mult;
}
const divison=(n1,n2)=>
{
    var div=n1/n2;
    document.getElementById("division").textContent="La Division de "+n1+"/"+n2+" es "+div;
   
}
