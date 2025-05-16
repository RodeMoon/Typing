interface Planet{
	name: string;
	galaxy: string;
	numberOfMoons: number;
	weight: number;
}

//Object with properties.
let planet: Planet = {
    name : "Saturn",
    galaxy : "Milky Way",
    numberOfMoons : 274,
    weight : 100000
};

console.log("Name :- " + planet.name);
console.log("Galaxy :- " + planet.galaxy);
console.log("Number of Moons :- " + planet.numberOfMoons);
console.log("Weight :- " + planet.weight);

// Iterating properties.
console.log("Iterating properties:")
for (let prop in planet) {
	const key = prop as keyof Planet;
	console.log("Planet " + key + " :- " + planet[key]);
}
