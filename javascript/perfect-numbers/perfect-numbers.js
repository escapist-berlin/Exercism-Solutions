//
// This is only a SKELETON file for the 'Perfect Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const classify = (num) => {
  if (num === 0 || num < 0) {
    throw new Error('Classification is only possible for natural numbers.');
  }

  let aliquotSum = 0
  for (let i = 1; i < num; i++) {
    if (!(num % i)) {
      aliquotSum += i
    }
  }

  switch (true) {
    case (aliquotSum === num):
      return "perfect"
    case (aliquotSum > num):
      return "abundant"
    case (aliquotSum < num || aliquotSum === 0):
      return "deficient"
  }

};
