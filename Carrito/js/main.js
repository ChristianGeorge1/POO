import Carrito from "./compra.js"

class Main {
    constructor(){
        var btnCalcular = document.querySelector('#calcular');
        btnCalcular.addEventListener('click',this.generar);
    }
    generar(){
        let nombre = document.querySelector('#nombre');
        let inputCantidad = document.querySelector('#cantidad');
        let inputPrecio = document.querySelector('#precio');

        let cantidad = Number(inputCantidad.value);
        let precio = Number(inputPrecio.value);

        let c1 = new Carrito(nombre.value, cantidad, precio);
        console.log(c1);
        console.log(`El producto: ${c1.nombre} tendras
        que pagar en pesos mexicanos sera: ${c1.getPrecioenPesos()}
        y en peso americano, sera: ${c1.getPrecioenDolares()} dolares`);

    }
}
var m = new Main();