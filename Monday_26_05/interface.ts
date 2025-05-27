(() => {

    interface Hero {
        name: string,
        age?: number,
        powers: number[],
        getName?: () => string
    }


    let flash: Hero = {
        name: 'Barry Allen',
        age: 24,
        powers: [1, 2]
    }

    interface superman extends Hero {
        name: 'Clark Kent',
        age: 60,
        powers: [1];
    }

    function heroName(hero: Hero) {
        console.log(`This is the hero named ${hero.name}`);
    }

    heroName(flash);


})()