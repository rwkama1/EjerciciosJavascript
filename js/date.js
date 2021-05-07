"use strict"

var today = new Date();
var dia=today.getDate();
var mes=today.getMonth();
var anio=today.getFullYear();
var hora=today.getHours();
var minutes=today.getMinutes();
var arraymes=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Setiembre","Octubre","Noviembre","Diciembre"]
var arraydias=["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
var getmes=arraymes[mes];
var getdia=arraydias[today.getDay()];
document.writeln("Hoy es "+getdia+","+" "+dia+" de "+getmes+" de "+anio);
document.write("</br>")
document.writeln("Son las "+hora+":"+minutes);

