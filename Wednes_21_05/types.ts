() => {
    type Hero = {
        name: string;
        age?: number;
        powers: number[];
        getName?: () => string;
    }

    let batman: Hero = {
        name: "Bruce Wayne",
        age: 32,
        powers: [23, 12, 100],
    }

    let flash: Hero = {
        name: "Barry Allen",
        powers: [23, 12, 100],
        getName() {
            return this.name;
        },
    }

    let superman: Hero = {
        name: "Clark Kent",
        age: 33,
        powers: [1],
        getName() {
            return this.name;
        }
    }
};
