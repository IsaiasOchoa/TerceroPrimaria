//DECLARANDO TODOS LOS ELEMENTOS EN EL DOCUMENTO

//numero de las preguntas
const elementoNumerosPreguntas = document.getElementById("main-section");
//gameOver y Victoria

const elementoVictoria = document.getElementById("victoria");
const elementoGameOver = document.getElementById("gameOver");

//Declarando los numeros de las preguntas

//HACIENDO LAS FUNCIONES DE CADA PREGUNTA
function pregunta(numero, numeroPregunta) {

    // Seleccionando la Pregunta y Mostrandola
    let num = document.getElementById(`${numero}`);
    let elementoPregunta = document.getElementById(`${numeroPregunta}`);

    //Mostrando la pregunta
    elementoPregunta.style.display = "block";

    //Desactivando el numero presionado
    num.removeAttribute("onclick");
    num.classList.add("disable-link");

}
//Haciendo la funcion de victoria y que aparezca el modal y regresar al menu de numeros
function victoria(numeroPregunta) {
    //Eliminando la pantalla de la pregunta
    let elementoPregunta = document.getElementById(`${numeroPregunta}`);
    elementoPregunta.style.display = "none";

    //Eliminando la pantalla de los numeros 
    elementoNumerosPreguntas.style.display = "none";

    //Mostrando el modal de victoria
    elementoVictoria.style.display = "flex";

}

function volverMenu() {
    elementoVictoria.style.display = "none";

    elementoNumerosPreguntas.style.display = "block";
}


//Haciendo la funcion de derrota y que aparesca el modal y regresar para volver a responder
function gameOver(numeroPregunta, numeroRespuesta) {
    
    //Desactivando el numero presionado
    let numPresionado = document.getElementById(`${numeroRespuesta}`);
    numPresionado.classList.add("disable-link");
    //Mostrando el modal de gameOver
    elementoGameOver.style.display = "flex";
}

function volverResponder(){
    //Eliminando el modal de Game Over
    elementoGameOver.style.display = "none";
}

