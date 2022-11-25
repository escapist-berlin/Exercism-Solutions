//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(str) {
    // Creating array of rows arrays
    const rowsArr = str.split("\n").map((item) => item.split(" ").map(Number))
    // console.log(rowsArr)
    
    const numOfColumns = rowsArr[0].length
    const columnsArr = []
    const currentIndex = 0

    
    
    // rowsArr.forEach((row) => {
      // const column = row.filter(item => row.indexof(item) === currentIndex);
      // currentIndex += 1;
      // columnsArr.push(column);
    // })

    // console.log(columnsArr)
    
    return { rows: rowsArr }
  }

  get rows() {
    throw new Error('Remove this statement and implement this function');
  }

  get columns() {
    throw new Error('Remove this statement and implement this function');
  }
}
