interface ColorCode {
  [color: string]: number
}

const colorCodes: ColorCode = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9
}

export function decodedResistorValue([first, second, third]: string[]): string {

  let result = Number(`${colorCodes[first]}${colorCodes[second]}`) * (10 ** colorCodes[third])
  let suffix = ''

  if (result >= 1e9) {
    suffix = 'gigaohms'
    result /= 1e9
  } else if (result >= 1e6) {
    suffix = 'megaohms'
    result /= 1e6
  } else if (result >= 1e3) {
    suffix = 'kiloohms'
    result /= 1e3
  } else {
    suffix = 'ohms'
  }

  return `${result} ${suffix}`
}
