 //
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    this._balance = 0
  }

  open() {
    
  }

  close() {
    throw new Error('Remove this statement and implement this function');
  }

  deposit(amount) {
    this._balance += amount
  }

  withdraw(amount) {
    this._balance -= amount
  }

  get balance() {
    return this._balance
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
