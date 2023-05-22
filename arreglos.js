let utiles = ["Lapiz", "Esferos", "Borrador", "Cuadernos", "Pinturas"]

console.log("Tienes un numero de", utiles.length, "utiles escolares.")

utiles.forEach((e,i)=> console.log(`#${i+1} ${e}`))

const newUtiles = utiles.map((e,i)=> `Util ${e} ${i}`);
console.log(newUtiles)
