class Peliculas {  //Atributos solamente  //Métodos
    constructor(nombre,genero,año,duracion){
       this.nombre_pelicula = nombre;
       this.genero = genero;
       this.año = año;
       this.duracion = duracion;
    }
    getDuracionEnHoras(){
        let resultado = this.duracion / 60;
        return resultado;
        
    }
}

var p1 = new Peliculas('Avengers', 'Acción' ,2017, 120);
var p2 = new Peliculas('Harry Potter','Misterio', 2015, 160);

console.log(p1);
console.log(p2);
