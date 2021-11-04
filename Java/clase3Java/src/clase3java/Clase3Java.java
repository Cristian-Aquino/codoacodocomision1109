package clase3java;
import personal.Departamento;
import personal.Personal;

public class Clase3Java {

    public static void main(String[] args) {
        Personal persona = new Personal("Luis", "Navas", 48);
        //persona.nombre = "Luis";
        //persona.apellido = "Navas";
        //persona.edad = 48;
        persona.setSueldo(250000);
        
        Personal administrativo = new Personal("Juan", "Perez", 38);
        administrativo.setSueldo(80000);
        System.out.println("El sueldo para el personal administrativo es: " 
                + administrativo.getSueldo());
        
        Personal mantenimiento = new Personal("Roberto", "Gomez", 43);
        mantenimiento.setSueldo(60000);
        System.out.println("El sueldo para el personal de mantenimiento es: " 
                + mantenimiento.getSueldo());
        
        Departamento it = new Departamento("Veronica", "Furlan", 32, "Desarrollo");
        it.setSueldo(500000);
        System.out.println(it.nombre + " esta ganando " + it.getSueldo());
        System.out.println(it.MostrarDatos());
        it.depto = "Gerencia General";
        
    }
    
}
