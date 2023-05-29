// Realizar una solicitud HTTP a la API de Chuck Norris Jokes
fetch('https://api.chucknorris.io/jokes/random')
  .then(response => response.json())
  .then(data => {
    // Obtener el chiste de la respuesta y mostrarlo en la consola
    console.log(data.value);
  })
  .catch(error => {
    // Manejar errores en caso de que la solicitud falle
    console.error('Ocurrió un error:', error);
  });

// Objeto persona
const persona = {
    nombre: 'Danny',
    edad: 20,
    telefono: '0965487474'
};
  
// Convertir el objeto a una cadena JSON
const personaJSON = JSON.stringify(persona);
  
// Guardar la cadena JSON en el LocalStorage
localStorage.setItem('persona', personaJSON);
  
// Recuperar los datos del LocalStorage
const personaGuardada = localStorage.getItem('persona');
  
// Convertir la cadena JSON de vuelta a un objeto
const personaRecuperada = JSON.parse(personaGuardada);
  
// Acceder a los datos del objeto
const nombre = personaRecuperada.nombre;
const edad = personaRecuperada.edad;
const telefono = personaRecuperada.telefono;
  
// Mostrar los datos en la consola
console.log('Nombre:', nombre);
console.log('Edad:', edad);
console.log('Teléfono:', telefono);

//Eliminar el local storage
localStorage.removeItem('persona')    
  