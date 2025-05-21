() => {
    type Hero = {
        name: string;
        age?: number;
        powers: number[];
        getName?: () => string;
    }

    let customVariable: (string | number | Hero) = 'Alfito';
    customVariable = 24;
    customVariable = {
        name: 'Sylas',
        powers: [3, 4]
    }

    console.log(typeof customVariable);
    console.log(customVariable);
};