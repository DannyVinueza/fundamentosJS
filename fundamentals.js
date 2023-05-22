"use strict";

const nombreInstitucion = "Escuela Politecnica Nacional";
console.log("Uso de la palabra reservada const para declarar variables: " + nombreInstitucion);

let numeroCampus = 1;
console.log("Uso de la palabra reservada let para declarar variables: " + numeroCampus);

var numeroPuertas = 5;
console.log("Uso de la palabra reservada var para declarar variables: " + numeroPuertas);

console.log();
console.log("Nombre:" + nombreInstitucion);
console.log("Numero de campus: " + numeroCampus);
console.log("Numero de entradas: " + numeroPuertas);

console.log();
console.log("\tStrings");
let nombreCompleto = "Danny Alexis Vinueza Zavala"
console.log("Nombre Completo:", nombreCompleto)
console.log("Numero de letras: ", nombreCompleto.length);
console.log("Encontrar Alexis: ", nombreCompleto.includes("Alexis"));
console.log("Convertir a Mayusculas: ", nombreCompleto.toUpperCase());
console.log("Convertir a Minusculas: ", nombreCompleto.toLowerCase());
console.log("Retirar los espacios de adelante y atras: ", nombreCompleto.trim());
console.log("Reemplazar Danny por Daniel: ", nombreCompleto.replace("Danny", "Daniel"));
console.log("Cortar el texto: ", nombreCompleto.slice(0,8));
console.log("Cortar el texto con substring: ", nombreCompleto.substring(0,8));
console.log("Cortar el texto: ", nombreCompleto.charAt(8));//Muestra la letra del indice que se le indique
console.log("Repetir un texto: ", nombreCompleto.repeat(2));
console.log("Dividir un texto: ", nombreCompleto.split(" "));
let separacion = nombreCompleto.split(" ");
let sep1 = separacion[0];
let sep2 = separacion[1];
let sep3 = separacion[2];
let sep4 = separacion[3];
console.log("\n\tImpresion de texto con template strings")
console.log(`${sep1} - ${sep2} - ${sep3} - ${sep4}`)

console.log("\n\tNumeros");
console.log("Encontrar el valor X de la sigueinte expresion: \nX = (y*23)^1/2 + (2-PI)")
let y = 2;

console.log("X = " + ((Math.sqrt(y*2))+(2-Math.PI)))