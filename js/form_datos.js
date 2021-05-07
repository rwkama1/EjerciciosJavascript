//Mostrar datos de un formulario

const mostrardatos=()=>
{
    let nombre=obtener_elemento_por_id("nombre").value;
    let apellido=obtener_elemento_por_id("apellido").value;
    let edad=parseInt(obtener_elemento_por_id("edad").value);
    if(edad<1)
    {
        limpiarcampos();
        obtener_elemento_por_id("error").innerHTML="La edad debe ser mayor a 0";
        
     
    }
    else
    {
    limpiarcampos();
    obtener_elemento_por_id("hname").innerHTML="Nombre: "+nombre;
    obtener_elemento_por_id("hapellido").innerHTML="Apellido: "+apellido;
    obtener_elemento_por_id("hedad").innerHTML="Edad: "+edad;
    }
    event.preventDefault();
}
const limpiarcampos=()=>
{
    obtener_elemento_por_id("hname").innerHTML="";
    obtener_elemento_por_id("hapellido").innerHTML="";
    obtener_elemento_por_id("hedad").innerHTML="";
    obtener_elemento_por_id("error").innerHTML="";
    obtener_elemento_por_id("nombre").value="";
    obtener_elemento_por_id("apellido").value="";
    obtener_elemento_por_id("edad").value="";
}
const obtener_elemento_por_id=(id)=>
{
     return document.getElementById(id);
}