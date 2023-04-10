// decoradores

// en js no existen como tal los decoradores.

function classDecorator<T extends { new (...args: any[]): {} }>(
    constructor: T
) {
    return class extends constructor {
        nuevaPropiedad = 'nueva propiedad';
        hola = 'sobrescribir'
    };
}

// existen muchos tipos de decoradores, para funciones, para clases, para composiciones etc...
// angular usa mucho los decoradores para cambiar las cosas.

@classDecorator
class MiSuperClase {
    public miPropiedad: string = 'ABC123';

    imprimir() {
        console.log('Hola mundo')
    }
}

// un decorador no es mas que una funcion.
// la sintaxis para llamar a un decorador es con @decoradorDecorador. 


console.log(MiSuperClase);

const miClase = new MiSuperClase();

console.log(miClase.miPropiedad);


// un decorador es una funcion que expande su clase anadiendo funcionalidades especiales.