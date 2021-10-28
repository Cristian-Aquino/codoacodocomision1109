package niveles;

public class Niveles {
    private String dificultad;
    public String experiencia;
    public String checkPoint;
    
    public Niveles(String dificultad, String checkPoint){
        this.experiencia = experiencia;
        this.checkPoint = checkPoint;
    }
    public String reiniciar(){
        return "Estamos en: " + this.checkPoint; 
    }

    public String getDificultad() {
        return dificultad;
    }
    public void setDificultad(String dificultad) {
        this.dificultad = dificultad;
    }
    
    
}
