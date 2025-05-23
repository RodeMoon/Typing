"use strict";
class Employee {
    constructor() {
        this._fullName = '';
    }
    get fullName() {
        return this._fullName;
    }
    set fullName(newName) {
        if (newName && newName.length > 0) {
            this._fullName = newName;
        }
        else {
            console.error('Invalid name.');
        }
    }
}
const employee = new Employee();
employee.fullName = 'John Doe';
console.log(employee.fullName);
employee.fullName = '';
