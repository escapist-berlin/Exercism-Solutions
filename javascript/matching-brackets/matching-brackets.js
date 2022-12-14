//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPaired = (input) => {
  const stack = []
  const brackets = { '[': ']', '{': '}', '(': ')' }

  for (let i = 0; i < input.length; i++) {
    // If true than it's an opening bracket - push it to stack
    if (Object.keys(brackets).includes(input[i])) {
      stack.push(input[i])
      console.log(stack)
    } else {
      // console.log("else", brackets[stack[0]] === input[i])

      brackets[stack[0]] === input[i] ? stack.shift() : stack.push(input[i])
        
      
    }
  }

  console.log(stack)
  return stack.length === 0 ? true : false
};


