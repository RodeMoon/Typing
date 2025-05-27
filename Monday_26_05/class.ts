class Movie {
    name: string;
    protagonist: string[];
    actors: string[];

    playingInCinema() {
        console.log(`The movie ${this.name} is playing at the moment.`);
    }

    constructor(name: string, protagonist: string[], actors: string[]) {
        this.name = name,
            this.protagonist = protagonist,
            this.actors = actors
    }
}

const movie = new Movie('Barbie', 
    ['Barbie', 'Ken'], 
    ['Margot', 'Ryan']);

const movie1 = new Movie('Openheimer', 
    ['Openheimer', 'Strauss'], 
    ['Cilian', 'Robert']);

    movie.playingInCinema();
    console.log(movie1);