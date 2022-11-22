//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// Creating an array of alphabet
const alphabet = [...Array(26)].map((_, i) => String.fromCharCode(i + 97))
// Creating an object of alphabet where every letter is a key, and initail value equals 0
const alphabetObject = Object.fromEntries(alphabet.map(char => ([char, 0])))
// console.log(alphabetObject)


export const isPangram = (sentence) => {

  // Converting sentence into character array
  const charArr = sentence.toLowerCase().split('')

  // Counting how ofter every char occers in the character array
  const result = charArr.reduce((charArrFreq, char) => {
    if (charArrFreq[char] == null) {
      charArrFreq[char] = 1;
    } else {
      charArrFreq[char] += 1;
    }
    return charArrFreq;
  }, {});

  // Checking if every letter from the alphabet array exists in result
  const isInAlphabet = (currentChar) => result.hasOwnProperty(currentChar);
  return alphabet.every(isInAlphabet);
};
