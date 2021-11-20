<%-- 
    Document   : pagina
    Created on : 9 nov. 2021, 11:25:56
    Author     : Cristian
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <%
            String saludo = "Hola";
            String nombre = "Cristian";
        %>
        <h1>Mi pàgina de jsp</h1>
        <p><%=saludo + " " + nombre %></p> <%--Asi se utilizan las variables para imprimirlas en pantalla--%>
        <p> <%=  new java.util.Date()
            %> </p> 
    </body>
</html>
