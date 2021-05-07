//Numero aleatorio entre el 1 y el 120
const generar_numero_aleatorio=()=>
{
var myNumeroAleatorio = Math.floor(Math.random()*(121-1)+1);
document.getElementById('h2').textContent="Numero aleatorio: "+myNumeroAleatorio;
}
//Math floor convierte el numero en un entero