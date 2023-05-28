function sumar(a, b) {
    return new Promise(function(respuesta) {
        setTimeout(function() {
            var resultado = a + b;
            respuesta(resultado);
        }, 1000);
    });
}
  
async function sumaTotal() {
    var resultado1 = await sumar(2, 3);
    var resultado2 = await sumar(resultado1, 4);
    var resultado3 = await sumar(resultado2, 5);
    console.log("El resultado de la suma es: " + resultado3);
}
  
sumaTotal();

