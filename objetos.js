const cliente = {
    nombre: "Danny",
    apellido: "Vinueza",
    age: 20,
    ultimaCompra:{
        fecha: "24-04-2023",
        nomProducto: "Manzanas",
        cantidad: 20,
        precioTotal: 3.50  
    },
    verPreciototal(){
        return `Precio ttal de las manzanas es: ${this.ultimaCompra.precioTotal}`
    }
}

console.log("Nombres del cliente: " , cliente.nombre + " " + cliente.apellido)
console.log("El precio total de ", cliente.ultimaCompra.nomProducto, " es: " , cliente.ultimaCompra.precioTotal)