"use strict";
//pa remover vocales WOWOWOWO
function removeVowels(data) {
    return data.replace(/[aeiou]/gi, '');
}
console.log(`Text w/o vowels: ${removeVowels("El Juano huele a cebolla con queso")}`);
