export class Triangle {

  constructor(...sides) {
    this.sides = sides
  }

  isEquilateral() {
    const side1 = this.sides[0]
    return this.isATriangle() && this.sides.every(side => side == side1)
  }

  isIsosceles() {
    return this.isATriangle() && !this.isScalene()
  }

  isScalene() {
    const [side1, side2, side3] = this.sides
    const sidesAreDifferent = side1 != side2 && side1 != side3 && side2 != side3
    return this.isATriangle() && sidesAreDifferent
  }

  isATriangle() {
    const [side1, side2, side3] = this.sides
    const sidesSizeAreValid = side1 + side2 >= side3 && side1 + side3 >= side2 && side2 + side3 >= side1
    return !this.sides.some(side => side == 0) && sidesSizeAreValid
  }
}
