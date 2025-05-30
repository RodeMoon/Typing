/* import { pair, getFirstElement, functionGenerics, genericsArrow, genericsArrow1 } from "./generics/generics";
import { Hero } from "./hero";

const flash = new Hero(
    "Flash",
    "Speed",
    25
)

//console.log(`The hero is ${flash.name}, his power is ${flash.power} and he is ${flash.age} years old.`);


console.log(functionGenerics([1, 2, 3]).length);
console.log(functionGenerics(flash).power);
console.log(functionGenerics({name: "Batman", power: "Intelligence", age: 35}));
console.log(genericsArrow(123.456).toFixed(2));
console.log(genericsArrow1("hello, typeScript!").toUpperCase());


// More examples of generics
const numbers = [1, 2, 3];
const firstNumber = getFirstElement<number>(numbers); // Type is number
console.log(firstNumber);

const strings = ["a", "b", "c"];
const firstString = getFirstElement<string>(strings); // Type is string
console.log(firstString);

// Another example w multiple types
const result = pair("id", 123); // Type: [string, number]
console.log(result);
*/

/*
import { fetchData } from "./promise/promise";
import { fetchDataWithAsyncAwait } from "./promise/promise";

fetchDataWithAsyncAwait("https://pokeapi.co/api/v2/pokemon/giglet")   
  .then((data) => {
    console.log(data); // "Data fetched successfully!"
  })
  .catch((error) => {
    console.error(error); // Error: Network error
  });
*/

import { showUserInfo } from "./promise/promise1";

// Ejecución de la función principal
showUserInfo(2); // Prueba con un ID existente
showUserInfo(99); // Prueba con un ID inexistente para disparar el catch

