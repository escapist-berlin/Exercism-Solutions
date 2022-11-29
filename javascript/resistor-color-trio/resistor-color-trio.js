export class ResistorColorTrio {
  constructor(input) {
    this.input = input
    this.colorCodes = {
      black: 0,
      brown: 1,
      red: 2,
      orange: 3,
      yellow: 4,
      green: 5,
      blue: 6,
      violet: 7,
      grey: 8,
      white: 9 }
    this.isValid = this.input.every((color) => this.colorCodes.hasOwnProperty(color))
    this.value = Number(`${this.colorCodes[this.input[0]]}${this.colorCodes[this.input[1]]}`)

    // Calculating how many zeros should be added to the value
    const zeros = this.colorCodes[this.input[2]]
    let count = 0

    while (count < zeros) {
      this.value *= 10
      count += 1
    }

    // Throwing an error if a color is not in the colorCodes
    if (!this.isValid) {
      throw new Error("/invalid color/")
    }

    // This line is needed because of how tests for this exercise are built
    this.label = this.label();
  }

  label() {
    if (this.value > 1000) {
      return `Resistor value: ${this.value / 1000} kiloohms`;

    } else {
      return `Resistor value: ${this.value} ohms`;
    }
  }
}
