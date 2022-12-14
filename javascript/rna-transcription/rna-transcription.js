//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const dnaRna = {
  "G": "C",
  "C": "G",
  "T": "A",
  "A": "U"
}

export const toRna = (dna) => {
  const dnaArray = dna.split('')
  const rnaArray = dnaArray.map(x => x = dnaRna[x]);
  return rnaArray.join("")
};
