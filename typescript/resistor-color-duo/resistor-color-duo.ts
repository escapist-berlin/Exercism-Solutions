interface ColorCode {
  [key: string]: number
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

export function decodedValue(input: string[]) {
  return Number(`${colorCodes[input[0]]}${colorCodes[input[1]]}`)
}
