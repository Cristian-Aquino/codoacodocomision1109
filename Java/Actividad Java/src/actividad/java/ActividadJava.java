package actividad.java;
import java.util.Scanner;

public class ActividadJava {

    public static void main(String[] args) {
        Usuario user = new Usuario();
        
        Scanner entrada = new Scanner(System.in);
        System.out.println("Ingrese su nombre: ");
        String nombre = entrada.nextLine();
        user.setNombre(nombre);
        
        System.out.println("Ingrese su apellido: ");
        String apellido = entrada.nextLine();
        user.setApellido(apellido);
        
        System.out.println("Ingrese su edad: ");
        String edad = entrada.nextLine();
        user.setEdad(edad);
        
        System.out.println("Ingrese su hobbie: ");
        String hobbie = entrada.nextLine();
        user.setHobbie(hobbie);
        
        System.out.println("¿Cual es su editor de código preferido? ");
        String editorCodigo = entrada.nextLine();
        user.setEditorCodigo(editorCodigo);
        
        System.out.println("¿Que sistema operativo utiliza? ");
        String SO = entrada.nextLine();
        user.setSO(SO);
        
        System.out.println("Nombre completo: " + user.getNombre() + " " + user.getApellido());
        System.out.println("Edad: " + user.getEdad());
        System.out.println("Hobbie: " + user.getHobbie());
        System.out.println("Editor de còdigo preferido: " + user.getEditorCodigo());
        System.out.println("Sistema operativo que utiliza: " + user.getSO());
        
    }
    
}
