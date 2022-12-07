 //
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    this._balance = 0
    this.isOpen = false
  }

  open() {
    if (this.isOpen) {
      throw new ValueError
    } else {
      this.isOpen = true
      this._balance = 0
    }
  }

  close() {
    if (this.isOpen) {
      this.isOpen = false
    } else {
      throw new ValueError
    }
  }

  deposit(amount) {
    if (this.isOpen && amount > 0) {
      this._balance += amount
    } else {
      throw new ValueError
    }
  }

  withdraw(amount) {
    if (this.isOpen && this._balance >= amount && amount > 0) {
      this._balance -= amount
    
    } else {
      throw new ValueError
    }
  }

  get balance() {
    if (this.isOpen) {
      return this._balance
    } else {
      throw new ValueError
    }
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
