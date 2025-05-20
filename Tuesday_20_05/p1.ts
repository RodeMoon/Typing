(() => {
  const addTwoNumbers = (a: number, b: number): number => {
    return a + b;
  };

  const TestingNumbers = (): void => {
    const add1 = addTwoNumbers(2, 4) === 6;
    const add2 = addTwoNumbers(11, 45) === 20;

    console.log(`The add 1 is correct? ${add1}`)
    console.log(`The add 2 is correct? ${add2}`)
  };
  TestingNumbers();
})();
