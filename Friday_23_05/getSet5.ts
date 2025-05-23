class Employee {
  private _fullName: string = '';

  get fullName(): string {
    return this._fullName;
  }

  set fullName(newName: string) {
    if (newName && newName.length > 0) {
      this._fullName = newName;
    } else {
      console.error('Invalid name.');
    }
  }
}

const employee: Employee = new Employee();
employee.fullName = 'John Doe';
console.log(employee.fullName);
employee.fullName = '';