// //Trabajando con Array
// let numero=0;
// let numeros=0;
// let array=[];
// while(numeros<6)
// {   
//     numeros++;
//     if(numeros===1)
//     {
//         numero=parseInt(prompt("Ingrese un numero"));
       
//     }
//     else
//     {
//         numero=parseInt(prompt("Ingrese el "+numeros+" "+"numero"));
       
//     }
//     while(isNaN(numero))
//     {
//         numero=parseInt(prompt("Ingrese solo numeros,Vuelva a ingresar el "+numeros+" "+"numero"));
//     }
//     array.push(numero);
   
// }

let array=[];

const agregar_numeros_al_array=(arr)=>
{
    let primern,segundon,tercern,cuarton,quinton,sexton;
    primern=parseInt(document.getElementById("primern").value);
    segundon=parseInt(document.getElementById("segundon").value);
    tercern=parseInt(document.getElementById("tercern").value);
    cuarton=parseInt(document.getElementById("cuarton").value);
    quinton=parseInt(document.getElementById("quinton").value);
    sexton=parseInt(document.getElementById("sexton").value);
    arr.push(primern);
    arr.push(segundon);
    arr.push(tercern);
    arr.push(cuarton);
    arr.push(quinton);
    arr.push(sexton);
}

const operaciones_array=()=>
{
    array=[];
    mostrar_array(array);
    ordernar_array_mostrarlo(array);
    invertir_array(array);
    cantidad_elementos(array);
    limpiar_inputs();
    const btnbuscar =document.getElementById("buscar");
    btnbuscar.removeAttribute("disabled");
    event.preventDefault();
}
const mostrar_array=(arr)=>
{
    agregar_numeros_al_array(arr);
    document.getElementById("mostrararray").textContent="Mostrar array: "+arr;
}
const ordernar_array_mostrarlo=(arr)=>
{
    arr.sort();
    document.getElementById("ordenararray").textContent="Array Ordenado: "+arr;
}
const invertir_array=(arr)=>
{
    arr.sort();
    arr.reverse();
    document.getElementById("invertirarray").textContent="Array Invertido: "+arr;
}
const cantidad_elementos=(arr)=>
{
    document.getElementById("cantidadelementos").textContent="Cantidad de elementos: "+arr.length;
}
const limpiar_inputs=()=>
{
    document.getElementById("primern").value="";
    document.getElementById("segundon").value="";
    document.getElementById("tercern").value="";
    document.getElementById("cuarton").value="";
    document.getElementById("quinton").value="";
    document.getElementById("sexton").value="";
   
}


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
        alert("No se encontro el numero "+n);
    }
    else
    {
        alert("Se encontro el numero "+n);
    }


   
}
