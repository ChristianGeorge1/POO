import Peliculas from  "./pelicula.js"

class Main {
    constructor(){
        var btnGenerar = document.querySelector('#btnAgregar');
        btnGenerar.addEventListener('click',this.generar);

    }
        generar(){
                
            let nombre = document.querySelector('#nombre');
            let genero = document.querySelector('#genero');
            let inputAño = document.querySelector('#año');
            let inputDuracion = document.querySelector('#duracion');

            let año = Number(inputAño.value);
            let duracion = Number(inputDuracion.value);
    
            let p3 = new Peliculas(nombre.value, genero.value, año, duracion);
            console.log(p3)
            console.log('La pelicula llamada: '+p3.nombre_pelicula+ " es: "+p3.getDuracionEnHoras()+" horas");
            
    }
}

var m = new Main();






/*
var p1 = new Peliculas('Avengers', 'Acción' ,2017, 120);
var p2 = new Peliculas('Harry Potter','Misterio', 2015, 160);



console.log(p1);
console.log(p2);


console.log('La duración de la pelicula: '+p1.nombre_pelicula+ ' es:  '+p1.getDuracionEnHoras());
*/