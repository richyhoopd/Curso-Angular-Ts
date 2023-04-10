export interface Producto { // creo una interface con dos valores, estos valores seran forzos al crear un objeto del tipo producto
    desc: string;
    precio: number;
}

const tableta: Producto = { // creo un objeto de tipo Producto, con el cual le doy valores al esquema.
   desc: 'iPad 4',
   precio: 1200
}

const telefono: Producto = {
   desc: 'iPhone 7',
   precio: 3000
}

export function calculaISV( productos: Producto[]): [number, number] { // mi funcion calculaISV recibe un pro
   let total = 0;

   productos.forEach( ({precio} ) => {
       total += precio;
   })

   return [total, total * 0.15]

}

const articulos = [  telefono, tableta ];

const [total, isv] = calculaISV( articulos )

console.log('Total:', total );
console.log('ISV:', isv );