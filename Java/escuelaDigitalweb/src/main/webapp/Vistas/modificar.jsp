<%-- 
    Document   : modificar
    Created on : 23 nov. 2021, 10:57:21
    Author     : Cristian
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Modificar Registro</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    </head>
    <body>
        <h1 class="text-center">Modificar Registro</h1>
        <div class="container">
            <div class="row d-flex justify-content-center"> <%-- "d-flex justify-content-center" centra todo lo que hay dentro del div --%>
                <form class="p-5 w-50" action="alumnosController?accion=insert" method="POST"> <%-- "w-50" cambia el tamaño --%>
                    <div class="mb-3">
                        <label for="id" class="form-label"></label>
                        <input type="hidden" class="form-control" id="id" name="id" value=<%= resultado.getNombre() %> /> <%-- "hidden" asigna de tipo oculto --%>
                        
                    </div>
                    <div class="mb-3">
                        <label for="nombre" class="form-label">Nombre</label>
                        <input type="text" class="form-control" id="nombre" name="nombre" value=<%= resultado.getNombre() %> />
                        
                    </div>
                    <div class="mb-3">
                        <label for="apellido" class="form-label">Apellido</label>
                        <input type="text" class="form-control" id="apellido" name="apellido" value=<%= resultado.getApellido() %>/>
                        
                    </div> 
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="text" class="form-control" id="email" name="email" value=<%= resultado.getEmail() %>/>
                        
                    </div> 
                    <div class="mb-3">
                        <label for="telefono" class="form-label">Telefono</label>
                        <input type="text" class="form-control" id="telefono" name="telefono" value=<%= resultado.getTelefono() %>/>
                        
                    </div>
                    <button type="submit" class="btn btn-primary">Agregar</button>
                        
                </form>
            </div>
        </div>
    </body>
</html>
