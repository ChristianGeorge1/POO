export default class Peliculas {  //Atributos solamente  //Métodos
    constructor(nombre,genero,año,duracion){
       this.nombre_pelicula = nombre;
       this.genero = genero;
       this.año = año;
       this.duracion = duracion;
    }
    getDuracionEnHoras(){
        let resultado; 
        resultado = this.duracion / 60;
        return resultado;
        
    }
}
