//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(str) {
    // Creating array of rows arrays
    const rowsArr = str.split("\n").map((item) => item.split(" ").map(Number))

    // Calculating the ammount of columns
    const numOfColumns = rowsArr[0].length
    // Creating array of columns arrays
    const columnsArr = []
    let currentColumn = 0

    while (currentColumn < numOfColumns) {
      const column = rowsArr.map(x => x[currentColumn]);
      columnsArr.push(column)
      currentColumn += 1
    }

    return { rows: rowsArr, columns: columnsArr }
  }

  get rows() {
    throw new Error('Remove this statement and implement this function');
  }

  get columns() {
    throw new Error('Remove this statement and implement this function');
  }
}
