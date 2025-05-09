//FUNCIÓN ANÓNIMA AUTOINVOCADA
(() => {
const num: number[] = [6, 20, 30, 1, 0, 7];
let name: string[] = ["Joyce", "Mery", "Miranda"];
const values: boolean[] = [true, false, true];

name.push('Alfre');

console.log({name});

const names: string[] = ["Alfre", "Sunny", "Alejandro"];

console.log(`The order names are: ${names.sort()}`);
console.log(`The ascending numbers: ${num.sort(function(a, b){return a - b})}`);
console.log(`The descending numbers: ${num.sort(function(a, b){return b - a})}`);
})()