//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
    this.side1 = sides[0];
    this.side2 = sides[1];
    this.side3 = sides[2];
    this.sides = sides;
  }

  isTriangle() {
    return (
      this.sides.every(side => side > 0) && (this.side1 + this.side2 >= this.side3 && this.side1 + this.side3 >= this.side2 && this.side3 + this.side2 >= this.side1)
    );
  }
  get isEquilateral() {
    return this.isTriangle() && this.side1 === this.side2 && this.side1 === this.side3;
  }

  get isIsosceles() {
    return this.isTriangle() && (this.side1 === this.side2 || this.side1 === this.side3 || this.side2 === this.side3);
  }

  get isScalene() {
    return this.isTriangle() && this.side1 !== this.side2 && this.side2 !== this.side3;
  }
}
