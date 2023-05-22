let utiles = ["Lapiz", "Esferos", "Borrador", "Cuadernos", "Pinturas"]

console.log("Tienes un numero de", utiles.length, "utiles escolares.")

utiles.forEach((e,i)=> console.log(`#${i+1} ${e}`))
console.log(utiles)
console.log("Reordenando el arreglo\n" + utiles.reverse())

console.log("\n\tDestructuracion de arreglos");

const nuevasHerramientas = ["Martillo", "Clavos", 12, {nombre: "Carpinteria"}, ["Mesa", "Sillas"]];

const [h1, h2, h3, h4, h5] = nuevasHerramientas;

console.log(h1)
console.log(h2)
console.log(h3)
console.log(h4)
console.log(h5)

const herramientas = nuevasHerramientas[4];
const extraccionH = herramientas[1];
console.log(extraccionH);

//Sintaxis res en arreglos
console.log("\n\tSintaxis res")
const [h11, h12, ...res] = nuevasHerramientas;
console.log(h11);
console.log(h12);
console.log(res);