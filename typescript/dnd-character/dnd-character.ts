export class DnDCharacter {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  hitpoints: number;

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
    let randomNums: number[] = [...Array(4)].map(_ => this.generateRandomDiceRollScore());

    return randomNums.sort((a, b) => a - b).slice(0, 3).reduce((n, sum) => sum + n);
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2);
  }

  private static generateRandomDiceRollScore(): number {
    return Math.floor(Math.random() * 6) + 1
  }
}
