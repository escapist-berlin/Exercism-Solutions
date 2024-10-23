export class DnDCharacter {
  public strength: number;
  public dexterity: number;
  public constitution: number;
  public intelligence: number;
  public wisdom: number;
  public charisma: number;

  public hitpoints: number;
  constructor() {
    this.strength = DnDCharacter.generateAbilityScore();
    this.dexterity = DnDCharacter.generateAbilityScore();
    this.constitution = DnDCharacter.generateAbilityScore();
    this.intelligence = DnDCharacter.generateAbilityScore();
    this.wisdom = DnDCharacter.generateAbilityScore();
    this.charisma = DnDCharacter.generateAbilityScore();

    const constitutionModifier = DnDCharacter.getModifierFor(this.constitution);
    this.hitpoints = 10 + constitutionModifier;
  }

  public static generateAbilityScore(): number {
    // Generate four random numbers (1-6).
    let randomNums: number[] = [];

    for (let step: number = 0; step < 4; step++) {
      randomNums.push(Math.floor(Math.random() * (6 - 1 + 1)) + 1);
    }
    // Find the smallest value and discard it.
    let filteredRandomNums: number[] = randomNums.sort().filter((_,i) => i)
    // Sum the other three values and return that sum.
    const sum: number = filteredRandomNums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    return sum;
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2);
  }
}
