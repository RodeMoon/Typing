"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: [1, 2]
    };
    function heroName(hero) {
        console.log(`This is the hero named ${hero.name}`);
    }
    heroName(flash);
})();
