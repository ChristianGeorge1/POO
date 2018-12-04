export default class Carrito {
    constructor(nombre, cantidad, precio){
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
    }
    getPrecioenPesos(){
        let resultado; 
        resultado = this.cantidad * this.precio;
        return resultado;
    }
    getPrecioenDolares(){
        let resultado2;
        let resultado3;
        resultado2 = this.cantidad * this.precio;
        resultado3 = resultado2 *  0.049;
        return resultado3;
    }
}