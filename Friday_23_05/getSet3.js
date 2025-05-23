"use strict";
class Person2 {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        if (newName.length > 0) {
            this._name = newName;
        }
    }
}
const person = new Person2("Alice");
console.log(person.name);
person.name = "Bob";
console.log(person.name);
