//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {

  const speech = message.trim()
  const isShouted = speech === speech.toUpperCase()
  const isQuestion = speech.endsWith('?')

  if (speech === "") {
    return "Fine. Be that way!"
  }
  
  switch (true) {
    case isQuestion && isShouted && /[a-zA-Z]/.test(speech):
      return "Calm down, I know what I'm doing!"
    case isShouted && /[a-zA-Z]/.test(speech):
      return 'Whoa, chill out!'
    case isQuestion:
      return 'Sure.'
    default:
      return 'Whatever.'
  }
};
