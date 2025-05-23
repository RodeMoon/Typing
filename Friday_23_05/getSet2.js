"use strict";
class Person1 {
    constructor(age, firstName1, lastName1) {
        this._age = age;
        this._firstName1 = firstName1;
        this._lastName1 = lastName1;
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
    get firstName1() {
        return this._firstName1;
    }
    set firstName1(thefirstName1) {
        if (!thefirstName1) {
            throw new Error('Invalid first name.');
        }
        this._firstName1 = thefirstName1;
    }
    get lastName1() {
        return this._lastName1;
    }
    set lastName1(theLastName1) {
        if (!theLastName1) {
            throw new Error('Invalid last name.');
        }
        this._lastName1 = theLastName1;
    }
    getFullName() {
        return `${this._firstName1} ${this._lastName1}`;
    }
}
const alumn1 = new Person1(22, 'Joyce', 'Olivares');
console.log(alumn1.getFullName);
alumn1.firstName1 = 'Mery';
alumn1.lastName1 = 'Aramburo';
alumn1.age = 23;
console.log(alumn1.getFullName);
console.log(alumn1);
