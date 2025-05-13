(()=> {
const person: string[] = ['Hugo', 'Paco', 'Luis', 'Pedro', 'Hector'];
const ages: number[] = [35, 50, 40, 18, 30];

const getYoung= (): number => ages.indexOf(Math.min(...ages));
const getOld = (): number => ages.indexOf(Math.max(...ages));

const young: number = getYoung();
const old: number = getOld();

console.log(`${person[young]} is the youngest with ${ages[young]} years old.`);
console.log(`${person[old]} is the oldest with ${ages[old]} years old.`);

// show in da page :P
document.body.innerHTML += `<p>${person[young]} is the youngest with ${ages[young]} years old.</p>`;
document.body.innerHTML += `<p>${person[old]} is the oldest with ${ages[old]} years old.</p>`;

})();