var n1=0;
n1=parseInt(prompt("Ingrese un numero"));

var divisor=0;
while(divisor<n1)
{
  divisor++;
  if(n1%divisor===0)
  {
    document.write("<br>")
    document.write(divisor);
  }
 
}
 