class Person1 {
  private _age: number;
  private _firstName1: string;
  private _lastName1: string;

  constructor(age: number, firstName1: string, lastName1: string) {
    this._age = age;
    this._firstName1 = firstName1;
    this._lastName1 = lastName1;
  }

  public get age() {
    return this._age;
  }

  public set age(theAge: number) {
    if (theAge <= 0 || theAge >= 200) {
      throw new Error('The age is invalid');
    }
    this._age = theAge;
  }

  public get firstName1() {
    return this._firstName1;
  }

  public set firstName1(thefirstName1: string) {
    if (!thefirstName1) {
      throw new Error('Invalid first name.');
    }
    this._firstName1 = thefirstName1;
  }

  public get lastName1() {
    return this._lastName1;
  }

  public set lastName1(theLastName1: string) {
    if (!theLastName1) {
      throw new Error('Invalid last name.');
    }
    this._lastName1 = theLastName1;
  }

  public getFullName(): string {
    return `${this._firstName1} ${this._lastName1}`;
  }
}

const alumn1: Person1 = new Person1(
    22,
    'Joyce',
    'Olivares'
)

console.log(alumn1.getFullName);

alumn1.firstName1 = 'Mery';
alumn1.lastName1 = 'Aramburo';
alumn1.age = 23;

console.log(alumn1.getFullName);
console.log(alumn1);