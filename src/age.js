export default class User{
  constructor(name, age) {
    this.name =name;
    this.age = age;
    this.mercury= this.age/.24;
    this.venus= this.age/.62;
    this.mars= this.age/1.88;
    this.jupiter= this.age/11.86;
    this.expectancy= 72;
    this.yearsLeft= this.expectancy -this.age;
  }
}