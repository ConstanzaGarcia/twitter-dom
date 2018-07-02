const boton = document.getElementById("btn");
boton.addEventListener("click", () => {
  // Acá guardo el comentario ingresado por el usuario en el textarea
  let comments = document.getElementById("tweet").value;

  // Limpiar el textarea
  document.getElementById("tweet").value = " ";

  //contenedor donde dejaré mis comentarios en HTML
  const cont = document.getElementById("tweets");

  //Crear div contenedor
  const newComments = document.createElement("div");

  //Validar que el textarea tenga un comentario y no esté vacío
  if (comments.length === 0 || comments === null){
    alert ("Debes ingresar un mensaje");
    return false;
  }

  //Crear checkbox
  const chck = document.createElement("input");
  chck.type = "checkbox";

  //Crear ícono corazón
  const heart =  document.createElement("i");
  heart.classList.add ('fas', 'fa-heart', 'heart');

  // Nodos de texto del textarea
  let textNewComment = document.createTextNode(comments);

  const contenedorElemento = document.createElement("p");
  contenedorElemento.appendChild(textNewComment);
  newComments.appendChild(heart);
  newComments.appendChild(contenedorElemento);

  cont.appendChild(newComments);
})