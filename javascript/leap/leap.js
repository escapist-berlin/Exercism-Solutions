//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isLeap = (year) => {
  const isDivisibleBy4 = year % 4 === 0
  const isDivisibleBy100 = year % 100 === 0
  const isDivisibleBy400 = year % 400 === 0
  
  switch (true) {
    case isDivisibleBy400:
      return true;
    case isDivisibleBy100:
      return false;
    case isDivisibleBy4:
      return true;
    default:
      return false;
  }
};
