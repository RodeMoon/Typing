"use strict";
(() => {
    const addTwoNumbers = (a, b) => {
        return a + b;
    };
    const TestingNumbers = () => {
        const add1 = addTwoNumbers(2, 4) === 6;
        const add2 = addTwoNumbers(11, 45) === 20;
        console.log(`The add 1 is correct? ${add1}`);
        console.log(`The add 2 is correct? ${add2}`);
    };
    TestingNumbers();
})();
