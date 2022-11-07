// @ts-check

/**
 * Double every card in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with every card doubled
 */
export function seeingDouble(deck) {
  return deck.map((value) => value * 2)
}

/**
 *  Creates triplicates of every 3 found in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with triplicate 3s
 */
export function threeOfEachThree(deck) {
  const result = []

  // Function that return an array of indexes where three occures
  function getAllIndexes(arr, val) {
    const indexes = [];
    for(let i = 0; i < arr.length; i++)
        if (arr[i] === val)
            indexes.push(i);
    return indexes;
  }
  // Creating an array of indexes of three and iterating through it
  const indexesOfThree = getAllIndexes(deck, 3);

  let start = 0

  for (const num of indexesOfThree) {
    // Splitting deck into slices and adding 2 more three after
    const arr = deck.slice(start, num + 1)
    result.push(...arr)
    result.push(3, 3)
    start = num + 1
  }

  // Adding last part of the deck to result
  const lastPart = deck.slice(start)
  result.push(...lastPart)

  return result
}

/**
 * Extracts the middle two cards from a deck.
 * Assumes a deck is always 10 cards.
 *
 * @param {number[]} deck of 10 cards
 *
 * @returns {number[]} deck with only two middle cards
 */
export function middleTwo(deck) {
  const new_arr =  deck.filter((card) => deck.indexOf(card) === 4 || deck.indexOf(card) === 5)
  return new_arr
}

/**
 * Moves the outside two cards to the middle.
 *
 * @param {number[]} deck with even number of cards
 *
 * @returns {number[]} transformed deck
 */

export function sandwichTrick(deck) {
  const first = deck[0]
  const last = deck[deck.length - 1]

  // Deleting the first and the last card
  deck.splice(0, 1)
  deck.splice(deck.length - 1, 1)

  // Calculating the index where to insert and inserting
  const insertIndex = deck.length / 2

  deck.splice(insertIndex, 0, last, first)

  return deck
}

/**
 * Removes every card from the deck except 2s.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with only 2s
 */
export function twoIsSpecial(deck) {
  throw new Error('Implement the twoIsSpecial function');
}

/**
 * Returns a perfectly order deck from lowest to highest.
 *
 * @param {number[]} deck shuffled deck
 *
 * @returns {number[]} ordered deck
 */
export function perfectlyOrdered(deck) {
  throw new Error('Implement the perfectlyOrdered function');
}

/**
 * Reorders the deck so that the top card ends up at the bottom.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} reordered deck
 */
export function reorder(deck) {
  throw new Error('Implement the reorder function');
}
