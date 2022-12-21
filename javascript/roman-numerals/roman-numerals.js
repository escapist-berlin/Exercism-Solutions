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

  for (let i = 0; i < ROMAN.length; i++) {
    
    console.log(`index in for loop ${i} - ${ROMAN[i]}`)
    
    while(intNum >= ROMAN[i][1]) {
      
      console.log("intNum", intNum)
      console.log("Arabic Number", ROMAN[i][1])
      console.log("Roman Number", ROMAN[i][0])
      
      intNum -= ROMAN[i][1]
      romanString += ROMAN[i][0]
    }
  }
  return romanString

};
