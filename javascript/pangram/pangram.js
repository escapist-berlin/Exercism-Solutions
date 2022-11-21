//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const alphabet = [...Array(26)].map((_, i) => String.fromCharCode(i + 97))

export const isPangram = (sentence) => {
  console.log(alphabet)

  if (sentence === "") {
    return false
  }


};
