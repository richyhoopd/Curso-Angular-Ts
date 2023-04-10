
import { Producto } from "./06-destructuracion-func";
import { calculaISV } from "./06-destructuracion-func";

const carritoCompras: Producto[] = [
    {
        desc: 'Telefono 1',
        precio: 100
    },
    {
        desc: 'Telefono 2',
        precio: 250
    },
];

const [total, isv] = calculaISV( carritoCompras);

console.log('Total: ', total);
console.log( 'ISV', isv)

// FUNCION DEL CONSTRUCTOR

// en POO un constructor es una subrutina cuya mision es incializar unobjeto de una clase en el cual se asignan los valores iniciaes del nuevo objeto.

/* Básicamente, un constructor es 
el método de una clase, que se ejecuta
 cuando ejecutamos "new MiClase();" : */