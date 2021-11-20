package actividad.java;

public class Usuario {
    String nombre, apellido, edad, hobbie, editorCodigo, SO;
    
    /*public Usuario (String nombre, String apellido, String edad, String hobbie, String editorCodigo, String SO){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.hobbie = hobbie;
        this.editorCodigo = editorCodigo;
        this.SO = SO;
    }*/

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getEdad() {
        return edad;
    }

    public void setEdad(String edad) {
        this.edad = edad;
    }

    public String getHobbie() {
        return hobbie;
    }

    public void setHobbie(String hobbie) {
        this.hobbie = hobbie;
    }

    public String getEditorCodigo() {
        return editorCodigo;
    }

    public void setEditorCodigo(String editorCodigo) {
        this.editorCodigo = editorCodigo;
    }

    public String getSO() {
        return SO;
    }

    public void setSO(String SO) {
        this.SO = SO;
    }
    
    

}
