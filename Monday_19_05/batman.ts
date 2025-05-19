(() => {
  // Tipos
  const batman: string = "Bruce";
  const superman: string = "Clark";

  const existe: boolean = false;

  // Tuplas
  const parejaHeroes: [string, string] = [batman, superman];
  const villano: [string, number, boolean] = ["Lex Lutor", 5, true];

  // Arreglos
  const aliados: string[] = ["Mujer Maravilla", "Acuaman", "San", "Flash"];

  //Enumeraciones
  enum Fuerza {
    Flash = 5,
    Superman = 100,
    Batman = 1,
    Acuaman = 0,
  }
  console.log(Fuerza.Superman);

  // Retorno de funciones
function activarBatiseñal(): string {
  return 'activada';
}

function pedirAyuda(): void {
  console.log('AIUDDDDDDDDDDDDAAAAAAAAA');
}


  // Aserciones de Tipo
const largoDelPoder = '100'.length;
  console.log(largoDelPoder);
})();
