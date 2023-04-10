// function sumar(a,b) {
//     return a + b;
// }

// lo anterior es una funcion default de js. la cual no define tipos de datos, ni tipo de dato deseado para retorno etc...

function sumar(a: number, b:number): number {
    return a+b;
} // la funcion anterior especifica que recibira dos datos de tipo numero y que la FUNCION COMPLETA regresara un numero.

// si usaramos el metodo toString dentro de la funcion, esta generaria un conflicto, porque esta funcion espera como return un numero.

const sumarFlecha = (a: number, b: number): number => {
    return a + b;
};

// SIEMPRE ES BUENO ESPECIFICAR EL TIPO, TANTO DE DECLARACION COMO DE RETORNO
// UN ARGUMENTO REQUERIDO NO PUEDE IR DESPUES DE UN OPCIONAL
// EL ORDEN MAS IDEAL SERIA: PRIMERO OBLIGATORIOS, LUEGO LOS OPCIONALES, LUEGO LOS QUE TIENEN UN VALOR POR DEFECTO.

function multiplicar(numero, otroNumero, base) { // le estoy diciendo que forzozamente necesita los tres argumentos 
    return numero * base; // lo que realmente se ejecutaria en este campo es: 10*Undefined*20, ya que solo dimos dos numeros como input.
}

// el orden de los argumentos es importante
// const resultado = multiplicar(10,20)
// console.log(resultado);

interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrarHp: () => void;
}

function curar(personaje: PersonajeLOR, curarX: number): void {
    personaje.pv += curarX;
    console.log(personaje)
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strider',
    pv: 50
    mostrarHp() { // este nos da un herror porque no esta definido directamente en la interface de personaje lor
        console.log('puntos de vida:', this.pv)
    }
}

curar( nuevoPersonaje, 20 ) // estamos sumandole 20 pv a nuestro personaje.

nuevoPersonaje.mostrarHp();