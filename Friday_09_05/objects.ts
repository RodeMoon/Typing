(() => {
type Cutie = {
    name: string,
    skills: string[],
    coffee?: boolean | null // -- el signo '?' indica que el 
                            // dato es opcional.
                            // -- el '|' indica que puede 
                            // aceptar un boleano o null.
}

    let cutie: Cutie = {
        name: 'Alfredo',
        skills: ['Beautiful', 'Programmer', 'Playing Guitar',
             'Metalhead'],
        coffee: true
    }

    let cutie2: Cutie = {
        name: 'Marke',
        skills: ['Sing', 'Dance', 'Playing Guitar',
             'Gummy smile']
    }
}) ()