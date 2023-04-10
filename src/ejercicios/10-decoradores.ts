// genericos

// es un concepto fundamental en angular que se usa bastante

function queTipoSoy<T>(argumento: T) {
    return argumento;
}

// la sintaxis del generico es '<Aqui adentro>'
// sirve para especificar un tipo personalizado de retorno/

let soyString = queTipoSoy('hola mundo');
let soyNumero = queTipoSoy( 100 );
let soyArreglo = queTipoSoy([ 1,2,3,4,5,6,7,8 ]);

let soyExplicito = queTipoSoy<number>(100) // le estoy diciendo que regresare.
// necesitaremos trabajar con datos que pueden variar dependiendo del tipo que voy a especificar al hacer la llamada
// sirven para poder decir que tipo de datos va a regresar la funcion

// un tipo generico es cualquier tipo de dato que nosotrs especifiquemos.


