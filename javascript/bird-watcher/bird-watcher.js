// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {

  let sum = 0;

  for(let i = 0; i < birdsPerDay.length; i++) {
    sum += birdsPerDay[i];
  }

  return sum;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {

  let end = week * 7;
  let start = end - 7;

  const SelectedWeekLog = birdsPerDay.slice(start, end);

  return totalBirdCount(SelectedWeekLog);
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {

    for(let i = 0; i < birdsPerDay.length; i = i + 2) {

      birdsPerDay.splice(i, 1, birdsPerDay[i] + 1);

    }

    return birdsPerDay;

}
