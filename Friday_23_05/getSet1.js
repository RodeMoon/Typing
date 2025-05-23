"use strict";
class Person {
    constructor(age, firstName, lastName) {
        this._age = age;
        this._firstName = firstName;
        this._lastName = lastName;
    }
    get age() {
        return this._age;
    }
    set age(theAge) {
        if (theAge <= 0 || theAge >= 200) {
            throw new Error('The age is invalid');
        }
        this._age = theAge;
    }
    getFullName() {
        return `${this._firstName} ${this._lastName}`;
    }
}
const alumn = new Person(23, 'Mery', 'Olivares');
console.log(alumn);
alumn.age = 20;
console.log(alumn.age);
