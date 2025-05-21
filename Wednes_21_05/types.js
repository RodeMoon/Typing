"use strict";
() => {
    let batman = {
        name: "Bruce Wayne",
        age: 32,
        powers: [23, 12, 100],
    };
    let flash = {
        name: "Barry Allen",
        powers: [23, 12, 100],
        getName() {
            return this.name;
        },
    };
    let superman = {
        name: "Clark Kent",
        age: 33,
        powers: [1],
        getName() {
            return this.name;
        }
    };
};
