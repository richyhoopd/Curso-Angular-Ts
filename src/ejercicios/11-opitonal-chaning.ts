// encadenamiento opcional

// el signo de interrogacion es bastante flexible dependiendo de donde se usa en typescript



interface Pasajero { // las interfaces solo son clases mas tontas para crear tipos
    nombre: string;
    hijos?: string[]
}

const pasajero1: Pasajero = {
    nombre: 'Fernando'
}

const pasajero2: Pasajero = {
    nombre: 'melissa',
    hijos: ['natalia', 'juan']
}

function imprimirHijos(pasajero: Pasajero):void {
    // en el caso especifico de los hijos, debido a que es un campo opcional
    // tenemos que pedirle que evalue a los hijos, si es que hay alguno o no
    // eso se logra con el uso del signo de interrogacion al final de la propiedad de los hijos

    const cuantosHijos = pasajero.hijos?.length || 0; // cualquier variable no definida en js tiene el valor de undefined
    // el signo de interrogacion ahi se le llama secure operator.
    console.log( cuantosHijos );
}