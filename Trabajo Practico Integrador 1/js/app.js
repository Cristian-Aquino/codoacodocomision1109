let container = document.getElementById("cuerpo");
// prompt("Esta funcionando");

const comprarTicket=()=>{

    container.innerHTML=`
    <div class="container">
        <div class="row">
            <div class="col col-md-10 offset-md-1 col-lg-8 offset-lg-2 pt-2 compraticket">
                <div class="card-group">

                    <div class="card me-1">
                        <div class="card-body border border-primary mr-1">
                        <h5 class="card-title text-center">Estudiantes</h5>
                        <p class="card-text text-center">Tienen un descuento</p>
                        <p class="card-title text-center font-weight-bold">80%</p>
                        <p class="card-text text-center">
                            <small class="text-muted">
                            * Presentar documentación
                            </small>
                        </p>
                        </div>
                    </div>

                    <div class="card mx-1">
                        <div class="card-body border border-primary mr-1">
                        <h5 class="card-title text-center">Trainee</h5>
                        <p class="card-text text-center">Tienen un descuento</p>
                        <p class="card-title text-center font-weight-bold">50%</p>
                        <p class="card-text text-center">
                            <small class="text-muted">
                            * Presentar documentación
                            </small>
                        </p>
                        </div>
                    </div>

                    <div class="card ms-1">
                        <div class="card-body border border-warning mr-1">
                        <h5 class="card-title text-center">Junior</h5>
                        <p class="card-text text-center">Tienen un descuento</p>
                        <p class="card-title text-center font-weight-bold">15%</p>
                        <p class="card-text text-center">
                            <small class="text-muted">
                            * Presentar documentación
                            </small>
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col text-uppercase text-center">
                <small>Venta</small>
                <h2> Valor de ticket $200 </h2>
            </div>
        </div>
        <div class="row">
            <div class="col col-md-10 offset-md-1 col-lg-8 offset-lg-2 pt-2">
                <form>
                    <div class="form-row">
                        <div class="d-flex">
                            <div class="form-row col-6 col-md-6 m-1">
                                <input id="nombre" type="text" class="form-control" placeholder="Nombre"></input>
                            </div>
                            <div class="form-row col-6 col-md-6 m-1">
                                <input id="apellido" type="text" class="form-control" placeholder="Apellido"></input>
                            </div>
                        </div>
                        <div class="form-row col-12 col-md-12 m-1 ">
                            <input id="correo" type="email" class="form-control ajusteTamaño" placeholder="Correo"></input>
                        </div>
                        <div class="d-flex">
                            <div class="form-group col-6 col-md-6 m-1">
                                <label for="">Cantidad</label>
                                <input id="contidadEntradas" type="text" class="form-control" placeholder="Cantidad"></input>
                            </div>
                            <div class="form-group col-6 col-md-6 m-1">
                            <label for="">Categoria</label>
                            <select class="form-select" id="categoria">
                                <option value="base">-Seleccione una opcion-</option>
                                <option value="estudiante">Estudiante</option>
                                <option value="trainee">Trainne</option>
                                <option value="junior">Junior</option>
                            </select>
                            </div>
                        </div>
                    </div>
                    <div class="form-row m-1" id="pagar">
                        <div class="alert alert-primary ajusteTamaño" role="alert">
                            Cantidad a pagar: $
                        </div>
                    </div>
                    <div class="form-row d-flex">
                        <button id="btn-enviar" class="btn col-6 m-1 text-white" onclick="borrar()">Borrar</button>
                        <button id="btn-enviar" type="button" class="btn col-6 m-1 text-white" onclick="resumen()">Resumen</button>
                    </div>
                </form>
            </div>
        </div>

    </div>
    

    
    `
};


const resumen=()=>{
    let datos = document.querySelectorAll("input");
    let cantidad = datos[3].value;
    var categoria = document.getElementById("categoria").value;
    let precioFinal;
    if(categoria =="estudiante"){
        precioFinal = 200 * cantidad * 0.2;
    } else if(categoria =="trainee"){
        precioFinal = 200 * cantidad * 0.5;
    } else if(categoria == "junior"){
        precioFinal = 200 * cantidad * 0.85;
    } else {
        precioFinal = "ERROR: FALTAN DATOS";
    }
    // alert("Funciona " + precioFinal);
    document.getElementById('pagar').innerHTML = `
    <div class="alert alert-primary ajusteTamaño" role="alert" id="pagar">
        Cantidad a pagar: $ ${precioFinal}
    </div>
    `;

};

const borrar=()=>{
    document.getElementById('pagar').innerHTML = `
    <div class="alert alert-primary ajusteTamaño" role="alert" id="pagar">
        Cantidad a pagar: $
    </div>
    `
    document.getElementById("categoria").value = "base";
    document.getElementById("contidadEntradas").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("correo").value = "";
};