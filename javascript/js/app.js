alert("Hola Mundo!") /*Aparece una ventana emergente antes de que cargue la pagina*/
console.log("Estamos en la consola") /*imprime el mensaje en la consola de la pagina (al ingresar f12)*/
        
let nombre="Cristian Aquino"; /* "let" es una variable de tipo string*/ 
var numero = 15; /* "var" es una variable de tipo entero*/
const PI = 3.1416; /* "const" es una variable constante*/
let hayClases = true;
console.log((numero+25)+" "+nombre) /* + concatena y suma numero*/
console.log(hayClases)
console.log(5 > 3)
let esFeriado = true;
        /*Condicionales*/
if(8 >= 8){
    console.log("es correcto!")
}
else{ 
    console.log("No es correcto")
}
console.log((5 > 3) ? "Es correcto 5 > 3": "No es correcto"); /*De forma ternario*/
if((hayClases == true) && esFeriado != true){
    console.log("Me conecto a la videollamada")
}
else{
    console.log("No me conecto a la videollamada")
}
if(25 < 32 || 12 > 20){
    console.log("Se cumplió la condicion")
}
let saludo = "Hola, como estas? ";
let saludar = saludo + nombre;

let elemento = document.getElementById("principal"); /*Captura un elemento del documento por medio de su id*/
// console.log(elemento)
elemento.innerHTML = "<h1 class='text-center bg-info'>" + saludar + "</h1"; //Muestra el resultado por pantalla de la pagina//
elemento.documentWrite("<h1 class='text-center bg-info'>" + saludar + "</h1"); //Hace lo mismo que la linea de codigo que esta arriba//