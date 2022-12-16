//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPaired = (str) => {
  const input = str.replaceAll(' ', '') // + Regex expression to filter only brackets
  const stack = []
  const brackets = { '[': ']', '{': '}', '(': ')' }

  for (let i = 0; i < input.length; i++) {
    // Only if input[i] is a key or a value from brackets object do the logic:
    if (Object.keys(brackets).includes(input[i]) || Object.values(brackets).includes(input[i])) {
      // If true than it's an opening bracket - push it to stack
      if (Object.keys(brackets).includes(input[i])) {
        stack.push(input[i])
      // If it is a closing bracket whose opening equivalent is at the top of the stack remove it from the stack
      } else if (brackets[stack[stack.length - 1]] === input[i]) {
        stack.pop()
      // Add anything else (e.g. first char is a closing bracket) to the stack
      } else {
        stack.push(input[i])
      }
    }   
  }
  return stack.length === 0 ? true : false
};


