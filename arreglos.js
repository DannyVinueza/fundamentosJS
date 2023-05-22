let utiles = ["Lapiz", "Esferos", "Borrador", "Cuadernos", "Pinturas"]

console.log("Tienes un numero de", utiles.length, "utiles escolares.")

utiles.forEach((e,i)=> console.log(`#${i+1} ${e}`))
console.log(utiles)
console.log("Reordenando el arreglo\n" + utiles.reverse())


