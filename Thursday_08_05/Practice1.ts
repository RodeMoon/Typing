(() => {
const num1: number = 55;
const num2: number = 45;
const num3: number = 30;

  function findBig(a: number, b: number, c: number): void {
    let mayor = a;
    let nameMayor = "a";
  
    if (b > mayor) {
      mayor = b;
      nameMayor = "b";
    }
  
    if (c > mayor) {
      mayor = c;
      nameMayor = "c";
    }
  
    console.log("Biggest number:", mayor);
    console.log("Name:", nameMayor);
  }
  
 findBig(num1, num2, num3);
})()