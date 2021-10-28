package mi.app;

public class Juego {
    public int puntos, vidas;
    public String armas, personaje, enemigos;
    
    Juego(int puntos, int vidas, String armas, String personaje, String enemigos){
        this.puntos = puntos;
        this.vidas = vidas;
        this.armas = armas;
        this.personaje = personaje;
        this.enemigos = enemigos;
    }
    
    public String mostrar_vidas(){
        return "Soy " + this.personaje + " y tengo " + this.vidas + " vidas";
    }
}
