type ShapeOfFigure = 'triangle' | 'circle' | 'rectangle';
type ColorOfFigure = 'red' | 'green' | 'blue';

export interface Figure {
  shape: ShapeOfFigure;
  color: ColorOfFigure;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: ShapeOfFigure = 'triangle';

  constructor(
    public color: ColorOfFigure,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (Math.min(this.a, this.b, this.c) <= 0
    || [this.a, this.b, this.c].sort((prev, cur) => prev - cur)[2]
    >= [this.a, this.b, this.c].sort((prev, cur) => prev - cur)[0]
    + [this.a, this.b, this.c].sort((prev, cur) => prev - cur)[1]) {
      throw new Error(`It’s even hard for me to imagine
      what kind of triangle this should be.
      I'm not a quantum computer, can I have a normal triangle?`);
    }
  }

  getArea(): number {
    const p = 0.5 * (this.a + this.b + this.c);

    return Math.floor(Math.sqrt(p * (p - this.a)
    * (p - this.b) * (p - this.c)) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: ShapeOfFigure = 'circle';

  constructor(public color: ColorOfFigure, public r: number) {
    if (this.r <= 0) {
      throw new Error(`The circle with radius - 0, seriously?
        Or, perhaps, you wrote a negative value for the radius,
        which, in general, does not change the essence of the matter.`);
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * (this.r ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: ShapeOfFigure = 'rectangle';

  constructor(
    public color: ColorOfFigure,
    public a: number,
    public b: number,
  ) {
    if (this.a <= 0 || this.b <= 0) {
      throw new Error(`The rectangle with length of side - 0, seriously?
      Or, perhaps, you wrote a negative value for the length of the side,
      which, in general, does not change the essence of the matter.`);
    }
  }

  getArea(): number {
    return Math.floor(this.a * this.b * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
