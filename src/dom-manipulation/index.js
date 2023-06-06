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

function handleSubmit(event) {
  event.preventDefault();
  //cambios en Body
  const body = document.getElementById("body");
  //console.log(body);
  body.style.fontFamily = "Verdana, sans-serif";
  //obtener los valores de los inputs
  const inRestaurante = document.getElementById("restaurantsInput").value;
  const inNeighborhood = document.getElementById("neighborhoodInput").value;
  const inHometown = document.getElementById("hometownInput").value;
  //Adicionar los inputs obtenidos a los spans de la lista li
  const spanRestauante = document.getElementById("restaurant");
  spanRestauante.textContent = inRestaurante;
  const spanNeighborhood = document.getElementById("neighborhood");
  spanNeighborhood.textContent = inNeighborhood;
  const spanHometown = document.getElementById("hometown");
  spanHometown.textContent = inHometown;
  //cambiar calsse de li
  const lis = document.getElementsByTagName("li");
  console.log(lis);
  for (let li of lis) {
    li.classList.add("list-item");
  }
  //adicionar el img antes de <h1>Sobre mi</h1>
  //obtener el h1 about Me
  const aboutMe = document.getElementById("aboutMe"); //no es necesario porque ene una pagina solo debe de haber un H1 - usar el selector por tag y coger el arrya[0]
  //nuevo img
  const img = document.createElement("img");
  //cambiar attibute src
  img.setAttribute(
    "src",
    "https://media.licdn.com/dms/image/C4E03AQFdmnDcGO96iw/profile-displayphoto-shrink_200_200/0/1629272874261?e=1691020800&v=beta&t=RNDU7apkQkQUf1wP2KdiIS9TxAYJciZ_A6eN73rC2Is"
  );
  //cambiar attribute alt
  img.setAttribute("alt", "Una foto portrait de Vanessa");
  //Adicionar la img antes de aboutMe dentro de Body
  body.insertBefore(img, aboutMe);
}

let form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);
