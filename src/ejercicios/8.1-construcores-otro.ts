class PersonaNormal {
    constructor(
        public nombre: string,
        public direccion: string
    ) {}
}

class Heroe extends PersonaNormal {
    constructor ( 
        public alterEgo: string,
        public edad: number,
        public nombreReal: string
    ) {
        super( nombreReal, 'new york' )
}
}

const ironman = new Heroe('ironman', 45, 'tony')

console.log(ironman)