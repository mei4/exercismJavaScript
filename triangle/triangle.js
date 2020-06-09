export class Triangle {

  constructor(side1, side2, side3) {
    this.sides = [side1, side2, side3]
  }

  isEquilateral() {
    const firstSide = this.sides[0]
    return this.isATriangle() && !this.sides.some(side => side != firstSide)
  }

  isIsosceles() {
    return this.isATriangle() && !this.isScalene()
  }

  isScalene() {
    const side1 = this.sides[0]
    const side2 = this.sides[1]
    const side3 = this.sides[2]
    const sidesAreDifferent = side1 != side2 && side1 != side3 && side2 != side3
    return this.isATriangle() && sidesAreDifferent
  }

  isATriangle() {
    const side1 = this.sides[0]
    const side2 = this.sides[1]
    const side3 = this.sides[2]
    const sidesSizeAreValid = side1 + side2 >= side3 && side1 + side3 >= side2 && side2 + side3 >= side1
    return !this.sides.some(side => side == 0) && sidesSizeAreValid
  }
}
