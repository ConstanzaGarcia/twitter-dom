const boton = document.getElementById("btn");
boton.addEventListener("click", () => {
    //acá guardo el comentario ingresado por el usuario
    let comments = document.getElementById("tweet").value;

    //limpiar el textarea
    document.getElementById("tweet").value=" ";

    //contenedor donde dejaré mis comentarios en html
    const tweets= document.getElementById("tweets"); 

    //crear un div contenedor
    const newComments = document.createElement("div");
})