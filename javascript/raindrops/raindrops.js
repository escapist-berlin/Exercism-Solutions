//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (num) => {
  let result = []
  let factors = { 3: 'Pling', 5: 'Plang', 7: 'Plong' }
  const isNotFactored = (currentValue) => num % currentValue !== 0;

  Object.keys(factors).forEach((factor) => {
    if (!isNotFactored(factor)) {
      result.push(factors[factor])
    } 
  })
  return Object.keys(factors).every(isNotFactored) ? String(num) : result.join("")
};
