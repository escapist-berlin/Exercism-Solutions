//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const price = 800

const discountMap = {
  1: 1,
  2: 0.95,
  3: 0.9,
  4: 0.8,
  5: 0.75
}

export const cost = (books) => {
  // const differentBooksAmount = ([...new Set(books)].length)

  const occurrences = books.reduce((booksFreq, book) => {
    booksFreq[book] == null ? booksFreq[book] = 1 : booksFreq[book] += 1
    return booksFreq
  }, {})

  console.log(occurrences)

  if (Object.keys(occurrences).length === 1) {
    const title = Object.keys(occurrences)[0]
    return price * occurrences[title]
  }

};
