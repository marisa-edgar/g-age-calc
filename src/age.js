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
    this.expectMercury= this.expectancy/.24;
    this.expectVenus= this.expectancy/.62;
    this.expectMars= this.expectancy/1.88;
    this.expectJupiter= this.expectancy/11.86;
    this.yearsLeftMercury= this.expectMercury - this.mercury;
    this.yearsLeftVenus= this.expectVenus - this.venus;
    this.yearsLeftMars= this.expectMars - this.mars;
    this.yearsLeftJupiter= this.expectJupiter - this.jupiter;
    this.overAge= this.expectancy - this.age * -1;
  }
}