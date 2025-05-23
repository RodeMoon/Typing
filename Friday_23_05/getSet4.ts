class Rectangle {
  private _width: number;
  private _height: number;

  constructor(width: number, height: number) {
    this._width = width;
    this._height = height;
  }

  get area(): number {
    return this._width * this._height;
  }
}

const rectangle = new Rectangle(5, 10);
const rectangle1 = new Rectangle(12, 1);
console.log(rectangle1.area);