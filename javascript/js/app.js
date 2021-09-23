// alert("Hola Mundo!") /*Aparece una ventana emergente antes de que cargue la pagina*/
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
document.write("<h1 class='text-center bg-info'>" + saludar + "</h1"); //Hace lo mismo que la linea de codigo que esta arriba//

document.write(`
    <div class="container"><div class="row" id="principal">
        <h1 class='text-center bg-info'></h1> {$+saludar} </div></div>
`);

// let mensaje = prompt("Menú \n 1. Papas fritas \n 2. Milanesa con fritas \n 3. Milanesa napolitana");//Sirve como el alert pero te da un campo para escribir un mensajes que se guardara en la variable//

// if(mensaje == 1){ //Al colocar los 3 = pregunta si los valores son iguales/identicos y son del mismo tipo.
//     elemento.innerHTML= "<p>Disfruta de tus Papas!.</p>";
// }else if(mensaje == "2"){
//     elemento.innerHTML = "<p>Disfruta de tu milanesa con papas!.</p>";
// }else if(mensaje == 3){
//     elemento.innerHTML = "<p>Disfruta de tu milanesa napolitana!.</p>";
// }else{
//     elemento.innerHTML = "<p>No es una opcion el valor tipeado.</p>";
// }

// switch (mensaje) {
//     case "1":
//         elemento.innerHTML = "<p>Disfruta de tus Papas!.</p>";
//         break;
//     case "2":
//         elemento.innerHTML = "<p>Disfruta de tu milanesa con Papas!.</p>";
//         break;
//     case "3":
//         elemento.innerHTML = "<p>Disfruta de tu milanesa napolitana!.</p>";
//         break;
//     default:
//         elemento.innerHTML = "<p>No es una opcion el valor tipeado.</p>";
//         let mensaje = prompt("Menú \n 1. Papas fritas \n 2. Milanesa con fritas \n 3. Milanesa napolitana");
//         break;
// }


// let num = parseInt(prompt("Ingresa el primer numero")); //"parseInt()" convierte el valor ingresado en entero.
// let num2 = parseInt(prompt("Ingresa el segundo numero"));
// let resultado = "<p>El resultado de: " + num + " y " + num2 + " es: " + (num + num2);

// elemento.innerHTML = resultado;
// elemento.innerHTML +="hola";

