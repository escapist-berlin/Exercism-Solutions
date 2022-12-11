//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  // initialize as empty object
  constructor() {
    this._school = {}
  }

  // return a copy of the roster
  roster() {
    for (const grade in this._school) {
      this._school[grade].sort()
    }
    return structuredClone(this._school)
  }

  add(name, grade) {
    if (this._school.hasOwnProperty(grade)) {
      this._school[grade].push(name)
    } else {
      this._school[grade] = [name]
    }
  }

  grade(num) {
    if (this._school.hasOwnProperty(num)) {
      const result = this._school[num].sort()
      return JSON.parse(JSON.stringify(result))
    } else {
      return []
    }
  }
}

