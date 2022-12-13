//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (oldSystem) => {
  const newSystem = {}
  
  for (const num in oldSystem) {
    oldSystem[num].map(char => newSystem[char.toLowerCase()] = Number(num))
  }
  
  return newSystem
};
