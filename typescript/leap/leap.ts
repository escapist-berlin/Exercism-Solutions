export const isLeap = (year: number): boolean => {
  switch (true) {
    case year % 400 === 0:
      return true
    case year % 100 === 0:
      return false
    case year % 4 === 0:
      return true
    default:
      return false
  }
}
