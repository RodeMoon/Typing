const num1: number = 55;
const num2: number = 45;
const num3: number = 30;
let mayor: number = num1;

console.log('This is gonna be the numbers:')
console.log(num1);
console.log(num2);
console.log(num3);

if (num2 > mayor) {
    mayor = num2;
  }
  
  if (num3 > mayor) {
    mayor = num3;
  }
  
  console.log(`EL MAYOR ES ${mayor}`);