//Accediendo al elemento mediante la clase
var form = document.querySelector('.uk-thumbnail-caption');

//Cambiando el contenido por uno nuevo
form.textContent = 'Hola Danny, estos son los fundamentos de JavaScript'; 

//Cambiando el color de fondo
form.style.backgroundColor="green" 

//Creando un elemento de tipo button en el elemento 
//Accedido anteriormente
var button = document.createElement('button');
button.innerText="Fundamentos JS"
form.appendChild(button);

//Poniendo un evento al button 
button.addEventListener('click', function() {
    alert('Se dio click');
  });

//Eliminando el button despues de 5 segundos
setTimeout(function() {
    button.remove();
}, 5000);