// Leer una cadena de texto mediante el método prompt()
// y generar un array con las palabras
// que contiene. Posteriormente, mostrar la siguiente información:
// Número de palabras
// Primera palabra y última palabra
// Las palabras colocadas en orden inverso
// Las palabras ordenadas de la a la z
// Las palabras ordenadas de la z a la a
// Un mensaje indicando si la frase es un palíndromo.
var text=prompt("Ingrese una frase");
document.write("<h1>"+"Frase: "+text+"</h1>")
var textodivido=text.split(" ");
//Split en este caso intercambia los espacios en blancos en comas
document.write("Numero de palabras: "+textodivido.length);
//retorna el numero de palabras
document.write("</br>");
document.write("Primera palabra: "+textodivido[0]);
document.write("</br>");
document.write("Ultima palabra: "+textodivido[textodivido.length-1]);
document.write("</br>");
document.write("Orden Inverso: "+textodivido.reverse().join(" "));
//con Join convierto el array invertido de string en un string 
document.write("</br>");
document.write("Orden de la A a Z: "+textodivido.sort().join(" "));
document.write("</br>");
document.write("Orden de la Z a A: "+textodivido.reverse().join(" "));
//Palindromo
const esPalindromo=(text)=>
{
    var normalized = text.toLowerCase().match(/[a-z]/gi).reverse();
    return normalized.join('') === normalized.reverse().join(''); 
}
document.write("</br>");
var palindromo=esPalindromo(text);
if(palindromo)
{
    document.write("<h3>La frase es un Palindromo</h3>");
}
else
{
    document.write("<h3>La frase no es un Palindromo</h3>");
}

