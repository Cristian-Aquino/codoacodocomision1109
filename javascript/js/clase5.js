let elemento = document.querySelector("#principal");

/*Arreglos*/

let mascotas = [];

// mascotas[0] = "Loro";
// mascotas[1] = "Perro";
//{propietario, especie, raza, edad, tamaño, imagen, tipoConsulta}
const agregarMascota=()=>{
    let datos = document.querySelectorAll("input").value;
    // console.log(datos[0]);
    let consulta = "";
    if(datos[6].checked){
        consulta = "Urgencia";
    }else{
        consulta = "Consulta";
    }
    let mascota = {
        propietario: datos[0].value,
        especie: datos[1].value,
        raza: datos[2].value,
        edad: datos[3].value,
        peso: datos[4].value,
        src: datos[5].value,
        consulta: consulta
    }
    mascotas.push(mascota);
};
// mascotas.push("Gallo"); //Con "arreglo.push" guarda el valor a lo ultimo del arreglo

const mostrarMascotas=()=>{ /*"funcion flecha" se utiliza con una constante que guarda una funcion anonima.*/
    for(let a=0; a < mascotas.length; a++){
        elemento.innerHTML += `
        <h2> ${a} ${mascotas[a]} </h2>`; //"arreglo.length" muestra la cantidad de valores que tiene el arreglo
    }
}

const CrearFormulario=()=>{
    elemento.innerHTML = `
    <form>
    <div class="mb-3">
        <label for="prop" class="form-label">
            Propietario
        </label>
        <input type="text" class="form-control" id="prop">
    </div>
    <div class="mb-3">
        <label for="especie" class="form-label">
            Especie
        </label>
        <input type="text" class="form-control" id="especie">
    </div>
    <div class="mb-3">
        <label for="raza" class="form-label">
            Raza
        </label>
        <input type="text" class="form-control" id="raza">
    </div>
    <div class="mb-3">
        <label for="edad" class="form-label">
            Edad
        </label>
        <input type="text" class="form-control" id="edad">
    </div>
    <div class="mb-3">
        <label for="peso" class="form-label">
            Peso
        </label>
        <input type="text" class="form-control" id="peso">
    </div>
    <div class="mb-3">
        <label for="img" class="form-label">
            Imagen
        </label>
        <input type="text" class="form-control" id="img">
    </div>
    <div class="mb-3 form-check">
        <input type="radio" class="form-check-input" name="tipo" id="urgencia">
        <label class="form-check-label" for="urgencia">
            Urgencia
        </label>
    </div>
    <div class="mb-3 form-check">
        <input type="radio" class="form-check-input" name="tipo" id="consulta">
        <label class="form-check-label" for="consulta">
            Consulta
        </label>
    </div>
    <button type="button" class="btn btn-primary" id="btn">
        Agregar Datos
    </button>
    </form>
    `;
    document.getElementById("btn").addEventListener('click', agregarMascota);
};
CrearFormulario();

