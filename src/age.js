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
    this.overAge= this.age - this.expectancy;
    this.overAgeMercury= this.overAge/.24;
    this.overAgeVenus= this.overAge/.62;
    this.overAgeMars= this.overAge/1.88;
    this.overAgeJupiter= this.overAge/11.86;
  }
  mercuryAge(){
    return this.age/.24
  }
  venusAge(){
    return this.age/.62
  }
  marsAge(){
    return this.age/1.88
  }
  jupiterAge(){
    return this.age/11.86
  }
  yearsPastExpectancy(){
    if (this.age < this.expectancy){
      return this.expectancy -this.age;
    } else{
      return this.age -this.expectancy
    }
  }
}