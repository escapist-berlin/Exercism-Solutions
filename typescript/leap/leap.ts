type LeapYearResult = boolean

export const isLeap = (year: number): LeapYearResult => {
  const isDivisibleBy4: boolean = year % 4 === 0
  const isDivisibleBy100: boolean = year % 100 === 0
  const isDivisibleBy400: boolean = year % 400 === 0

  switch (true) {
    case isDivisibleBy400:
      return true
    case isDivisibleBy100:
      return false
    case isDivisibleBy4:
      return true
    default:
      return false
  }
}
