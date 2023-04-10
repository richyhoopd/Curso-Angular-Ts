let habilidades: string[] = ['bash', 'counter', 'healing'];

// los arreglos en ts tienen que ser definidos al momento de crearse con su tipo de dato y corchetes cuadrados
// despues se le ingresa los datos con normalidad

interface Personaje {
    nombre: String;
    hp: number;
    habilidades: string[]; // con esto indicamos que el campo de habilidades es un arreglo de texto
    puebloNatal?: string; // al usar '?' hacemos que este campo sea opiconal.
}


const personaje: Personaje = { // hacemos que el objeto personaje sea del tipo Perosnaje
    nombre: 'strider',
    hp: 100,
    habilidades: ['bash', 'counter', 'healing']
}

// las interfaces obligan a nuestros objetos a implementar lo que nosotros le decimos.

personaje.puebloNatal = 'PUEBLO PALETA';

console.table(personaje);

/* A diferencia de la interfaz, la clase existe en el contexto como un tipo de variable de TS. La clase puede proporcionar métodos de implementación específicos para variables y métodos. Su función no es solo limitar la estructura de datos.
*/


// una interface tiene como objetivo limitar la estructura de los datos

// una clase sirve para proporiconar metodos de implementacion especificos para variables y metodos.

// tanto la interface como la clase pueden usarse para limitar la estructura de los datos.

// el uso frecuente de clases afectara el rendimiento del programa.