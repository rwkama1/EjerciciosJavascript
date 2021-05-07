//Mostrar dato de formulario con localstorage
let nombre,arraynombres;
arraynombres=[];
const txtname=()=>
{
  var nam="";
 return nam=String(obtener_elemento_por_id("txtname").value);

}
const limpiarinputtext=()=>
{
 obtener_elemento_por_id("txtname").value="";

}
const obtener_elemento_por_id=(id)=>
{
     return document.getElementById(id);
}
const guardarlocalstorage=()=>
{
 
   nombre=txtname();
  const encontrar=buscarnombre(nombre);
  if(encontrar!=undefined)
  {
    alert("Ese nombre ya existe en el LocalStorage");
    return;
  }
  if(arraynombres===[])
  {
    
    arraynombres.push(nombre);
    window.localStorage.setItem("nombres",JSON.stringify(arraynombres))
    alert("El nombre "+nombre+" fue guardado en el LocalStorage");
  }
  else
  {
   
    const nombrestorage=window.localStorage.getItem("nombres");
    const jsoonnombres=JSON.parse(nombrestorage);
   jsoonnombres.push(nombre)
   window.localStorage.setItem("nombres",JSON.stringify(jsoonnombres))
    alert("El nombre "+nombre+" fue guardado en el LocalStorage");
  }


 
limpiarinputtext(); 
}
const eliminar_nombre_local_storage=()=>
{

   nombre=txtname();
  const encontrar=buscarnombre(nombre);
  if(encontrar===undefined)
  {
    alert("Ese nombre no existe en el LocalStorage");
    return;
  }
  const nombrestorage=window.localStorage.getItem("nombres");
  const jsoonnombres=JSON.parse(nombrestorage);
  let pos=jsoonnombres.indexOf(nombre);
  if(nombre.trim()==="")
  {
    alert("Ingrese el nombre que desea eliminar");
    return;
  }
 
 jsoonnombres.splice(pos,1);
 window.localStorage.setItem("nombres",JSON.stringify(jsoonnombres))
 mostrarNombres();
 limpiarinputtext();


}
const mostrarNombres=()=>
{
  limpiarlistado();
  const nombrestorage=window.localStorage.getItem("nombres");
  const jsoonnombres=JSON.parse(nombrestorage);
  for(var name of jsoonnombres)
  {
  var li=document.createElement("li");
  var litext=document.createTextNode(name);
  li.appendChild(litext);
  obtener_elemento_por_id("list").appendChild(li);
  }
}
const limpiarlistado=()=>
{
  obtener_elemento_por_id("list").innerHTML="";
}
const buscarnombre=(nombre)=>
{
  const nombrestorage=window.localStorage.getItem("nombres");
  const jsoonnombres=JSON.parse(nombrestorage);
 const buscar=jsoonnombres.find(n=>n===nombre)
  return buscar;
}


