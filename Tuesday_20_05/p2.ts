(() => {
  interface Params {
    first: number;
    second: number;
  }

  const addTwoNumbers = (params: Params): number => {
    return params.first + params.second;
  };

  const TestingNumbers = (): void => {
    const add1 = addTwoNumbers({ first: 2, second: 4 }) == 6;
    const add2 = addTwoNumbers({ first: 10, second: 20 }) == 11;

    console.log(`The add 1 is correct? ${add1}`)
    console.log(`The add 2 is correct? ${add2}`)
  };

  TestingNumbers();
})();
