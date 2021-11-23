package config;
import java.sql.*;
import java.util.logging.Level;
import java.util.logging.Logger;

public class BasedeDatos {
    public String driver = "com.mysql.cj.jdbc.Driver";
    public Connection getConection() throws SQLException{
        Connection conexion = null;
        try{
            Class.forName(driver);
            conexion = DriverManager.getConnection("jdbc:mysql:://localhost:3306/comision1109", "root", "");
        }catch(SQLException e){
            System.out.println(e.toString());
        
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(BasedeDatos.class.getName()).log(Level.SEVERE, null, ex);
        }
        return conexion;
    }
    public static void main(String [] argms) throws SQLException{
        BasedeDatos con = new BasedeDatos();
        
        Connection conexion = null;
        conexion = con.getConection();
        
        PreparedStatement ps;
        ResultSet rs;
        
        ps = conexion.prepareStatement("SELECT * FROM participantes");
        rs = ps.executeQuery();
        
        while(rs.next()){
            int id = rs.getInt("id");
            String nombre = rs.getString("nombres");
            String apellido = rs.getString("apellidos");
            String email = rs.getString("email");
            System.out.println("id: " + id + "Nombres: " + nombre + "Apellidos: " + apellido + "email: " + email);
        }
        
        
    }
}
