/*
* Usa todo lo que has aprendido para manipular el DOM usando sólo JavaScript
* para completar las preguntas debajo cuando hagas "submit" en el formulario:
* 1. Cambia el estilo del elemento <body> para que todo el texto tenga una font-family: "Verdana, sans-serif".
* 2. Asegúrate que todos los elementos <span> muestren el contenido que has introducido en los inputs.
* 3. Haz un loop que cambie la clase de cada <li> a "list-item"
* 5. Crea un nuevo elemento <img>, haz que el atributo src sea una imagen tuya y añádelo a la parte superior
* de la sección "Sobre mi". Si necesitas añadir algún elemento adicional al index.html, puedes hacerlo,
* pero crédito extra si lo logras sin añadir elementos adicionales. 
* 5. Bonus - Modifica y añade estilo al layout para que tu página "Sobre mi" tenga una aspecto más pulido.
 */

function handleSubmit() {
  alert("Submit!");
}

let form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);
