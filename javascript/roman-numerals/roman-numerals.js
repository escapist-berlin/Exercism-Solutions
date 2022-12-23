//
// Greedy Algorithm - iterate through each value ensuring that the highest values are evaluated first
// https://medium.com/@chyanpin/solving-leetcodes-integer-to-roman-challenge-f850347c377c

const ROMAN = [
  ["M", 1000],
  ["CM", 900],
  ["D", 500],
  ["CD", 400],
  ["C", 100],
  ["XC", 90],
  ["L", 50],
  ["XL", 40],
  ["X", 10],
  ["IX", 9],
  ["V", 5],
  ["IV", 4],
  ["I", 1]
];

export const toRoman = (num) => {
  let romanString = ""
  let intNum = num

  // for (let i = 0; i < ROMAN.length; i++) {

  //   while(intNum >= ROMAN[i][1]) {

  //     intNum -= ROMAN[i][1]
  //     romanString += ROMAN[i][0]
  //   }

  // }

  ROMAN.forEach(item => {
    while(intNum >= item[1]) {

      intNum -= item[1]
      romanString += item[0]
    }
  })

  // ROMAN.forEach(item => {
  //   if (num >= item[1]) {
  //     num -= item[1]
  //     romanString += item[0]
  //   }
  // })

  return romanString
};
