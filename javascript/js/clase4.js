let elemento = document.getElementById("principal");

window.addEventListener('load', function (){ /* "window. load " se utiliza para que se ejecute al momento de que carga la pagina */
    elemento.innerHTML = `
    <form action="#">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1">
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1">
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="button" id="btn" class="btn btn-primary" onclick = "entrar()">Entrar</button>
  </form>
    `;
}); 
// let btn = document.getElementById("btn");
let usuario = {
    nombre: 'Cristian Aquino',
    mail:'cristian@gmail.com',
    pass: '123456',
    validar:(e,p)=>{ //Se declara una funcion dentro de un objeto
        if(e === usuario.mail && p === usuario.pass){
            return true;
        }else{
            return false;
        }
    }
};
function entrar(){
    // ev.preventDefault(); //No permite que vuelva a cargar la pagina
    let mail = document.getElementById("exampleInputEmail1").value;
    let pass = document.getElementById("exampleInputPassword1").value;
    
    let entra = usuario.validar(mail,pass);
    if(entra){
        elemento.innerHTML = `
            <h1>Administración</h1>
            <p>Bienvenido ${usuario.nombre}</p>
        `;//Con "${variable}" se puede trabajar con el valor de la variable dentro del innerHTML
    }
    
}

