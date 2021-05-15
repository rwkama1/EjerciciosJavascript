// Introducir una fecha en formato cadena mediante el método prompt() 
//y en formato mmm
// dd, aaaa (por ejemplo, Jan 23, 2008) 
//y devolver en un cuadro de mensaje el número de días
// que han pasado hasta la fecha actual.
// Si la cadena introducida no se reconoce como fecha
// devolverá false
const calcular=()=>
{
    let date =new Date(document.getElementById("fecha").value);
    let hoy=new Date();
    let diff=hoy-date;
    let resultado=(Math.floor(diff/(1000*60*60*24)))
    document.getElementById("resultado").textContent="La diferencia de dias entre la fecha "
    +date.toLocaleDateString()
    +" y la fecha actual es "+resultado;
    event.preventDefault();
}

    // var date=new Date(prompt("Ingrese una fecha ej: (Jan 23,2008)"))
    // var hoy=new Date();
    // var diff=hoy-date;
    // if(isNaN(date))
    // {
    //     document.write(false);
    // }
    // else
    // {
    //     document.write(Math.floor(diff/(1000*60*60*24)))
    //     //retorna la cantidad de dias transcurridos
    // }
   





