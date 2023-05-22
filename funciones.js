"use strict"

function impresionNum(i){//Funcion declarada
    console.log("El numero es: " + i)
}

for (let i = 0; i<5; i+=2){
    impresionNum(i);
}

const imprimirExp = function(i, j){
    console.log(Math.pow(i,j))
}
let i = 0;
while(i < 10){
    imprimirExp(i, i+1);
    i++;
}