// desestructuracion de objetos

interface Reproductor { 
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles
}

interface Detalles {
    autor: string;
    anio: number
};

const reproductor: Reproductor = {
    volumen: 70,
    segundo: 13,
    cancion: 'MeSS',
    detalles: {
        autor: 'ed sheeran',
        anio: 2019
    }
}

const { volumen, segundo, cancion, detalles:{autor} } = reproductor;

// console.log('EEEA: ', volumen);
// console.log('EEEA: ', segundo);
// console.log('EEEA: ', cancion);
// console.log('EEEA: ', autor);

// desestructuracion de arreglos 

const dbz: string[] = ['goku', 'vegeta', 'trunks'];
const [ p1, p2, p3 ] = dbz; // para desestructurar un arreglo se hace con llaves cuadradas


console.log('personaje 1:', p1);
console.log('personaje 2:', p2);
console.log('personaje 3:', p3);
