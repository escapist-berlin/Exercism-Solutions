//
// This is only a SKELETON file for the 'Nucleotide Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function countNucleotides(strand) {
  const dnaStr = "ACGT"
  const dnaObject = {
    A: 0,
    C: 0,
    G: 0,
    T: 0
  }

  const isValidDna = [...strand].every((char) => dnaStr.includes(char))

  if (isValidDna) {
    [...strand].forEach((char) => {
      dnaObject[char] += 1
    })
    return Object.values(dnaObject).join(" ")
  } else {
    throw new Error("Invalid nucleotide in strand")
  }
}
