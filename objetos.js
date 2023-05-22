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

console.log(cliente);

cliente.edad = 23;
console.log("\n\tAgregando una nueva clave con valor edad: 20");
console.log(cliente)

console.log("\n\tEliminando la clave agrgado anteriormente");
delete cliente.edad;

console.log(cliente);

console.log("\n\tDestructuración de objetos");
//Destructuracion de objetos asignando a variables del mismo nombre del objeto
const {nombre, apellido, edad, ultimaCompra} = cliente;
console.log(nombre, apellido, edad, ultimaCompra);
//Destructuracion de objetos asignando con el mismo valor y a venta con un valor predeterminado
//const {nombre, apellido, edad, venta = cliente.ultimaCompra} = cliente;

//Destructuracion de objetos asignando con el mismo valor y sacando un valor especifico de la 
//clave ultimaCompra
//const {nombre, apellido, edad, ultimaCompra: {nomProducto}} = cliente;

//Destructuracion de objetos asignando con el mismo valor y asignando despues de edad a nuevo un objeto nuevo
//const {nombre, apellido, edad, ...nuevo} = cliente;