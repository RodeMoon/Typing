(() => {

    interface Hero  {
        name: string;
        age?: number;
        powers: number[];
        getName?: () => string;
    }


    interface flash extends Hero {
        name: 'Barry Allen',
        age: 24,
        powers: [1,2]
    } 

    interface superman extends Hero {
        name: 'Clark Kent',
        age: 60,
        powers: [1];
    }




})()