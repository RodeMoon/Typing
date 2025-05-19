"use strict";
(() => {
    // Tipos
    const batman = "Bruce";
    const superman = "Clark";
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ["Lex Lutor", 5, true];
    // Arreglos
    const aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
    //Enumeraciones
    let Fuerza;
    (function (Fuerza) {
        Fuerza[Fuerza["Flash"] = 5] = "Flash";
        Fuerza[Fuerza["Superman"] = 100] = "Superman";
        Fuerza[Fuerza["Batman"] = 1] = "Batman";
        Fuerza[Fuerza["Acuaman"] = 0] = "Acuaman";
    })(Fuerza || (Fuerza = {}));
    console.log(Fuerza.Superman);
    // Retorno de funciones
    function activarBatiseñal() {
        return 'activada';
    }
    function pedirAyuda() {
        console.log('AIUDDDDDDDDDDDDAAAAAAAAA');
    }
    // Aserciones de Tipo
    const largoDelPoder = '100'.length;
    console.log(largoDelPoder);
})();
