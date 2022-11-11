//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (input) => {

  // Making a deep copy of date object
  const copiedInput = new Date(input.getTime())
  // Adding gigasecond
  const date = copiedInput.setSeconds(copiedInput.getSeconds() + 1000000000)

  return new Date(date)
};
