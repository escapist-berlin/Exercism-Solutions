//
// This is only a SKELETON file for the 'Perfect Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const classify = (num) => {
  if (num === 0 || num < 0) {
    throw new Error('Classification is only possible for natural numbers.');
  }

  // Create an array containing 1...(num - 1)
  const arr = [...Array(num).keys()].map(i => i + 1)
  arr.pop(-1)

  // Find all proper divisors and calculate aliquot sum
  const properDivisors = arr.filter(item => Number.isInteger(num / item))
  const aliquotSum = arr.length === 0 ? null : properDivisors.reduce((acc, cur) => acc + cur)

  switch (true) {
    case (aliquotSum === num):
      return "perfect"
    case (aliquotSum > num):
      return "abundant"
    case (aliquotSum < num || aliquotSum === null):
      return "deficient"
  }
};
