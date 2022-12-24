//
// Greedy Algorithm - iterate through each value ensuring that the highest values are evaluated first
// https://medium.com/@chyanpin/solving-leetcodes-integer-to-roman-challenge-f850347c377c

const ROMAN = {
  M: 1000,
 CM:  900,
  D:  500,
 CD:  400,
  C:  100,
 XC:   90,
  L:   50,
 XL:   40,
  X:   10,
 IX:    9,
  V:    5,
 IV:    4,
  I:    1,
};

export const toRoman = (num) => {
  let romanString = ""

  for (let letters in ROMAN) {
    while (num >= ROMAN[letters]) {
      num -= ROMAN[letters];
      romanString += letters;
    }
  }
  return romanString
};
