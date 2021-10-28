package mi.app;
import niveles.Niveles;

public class MiApp {
  
    public static void main(String[] args) {
        Juego jugador = new Juego(0, 3, "ak-45", "Juan", "NetBeans");
        Juego jugador1 = new Juego(0, 3, "ak-45", "Pedro", "NetBeans");
        System.out.println(jugador.personaje);
        System.out.println(jugador1.personaje);
        System.out.println(jugador.mostrar_vidas());
        Niveles niveles = new Niveles("media", "dos");
        niveles.setDificultad("principiante");
        System.out.println(niveles.getDificultad());
        jugador.vidas = 0;
        System.out.println(jugador.vidas);
        
        if(jugador.vidas == 0){
            System.out.println(niveles.reiniciar());
        }
        
    }
    
}
