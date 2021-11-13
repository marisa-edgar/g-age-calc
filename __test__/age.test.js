import  User  from './../src/age.js';

describe('User',()=>{
  test('should correctly create an object for user', () =>{
    const user1 = new User("Risa",32);
    expect(user1.name).toEqual("Risa");
    expect(user1.age).toEqual(32);
    
  })
  test('should correctly return users age on planets',()=>{
    const user1 = new User("Risa",32);
    expect(user1.name).toEqual("Risa");
    expect(user1.age).toEqual(32);
    expect(user1.mercury).toEqual(133.33333333333334);
    expect(user1.venus).toEqual(51.612903225806456);
    expect(user1.mars).toEqual(17.02127659574468);
    expect(user1.jupiter).toEqual(2.69814502529511);
  })
  test('should correctly return average life span',()=>{
    
    const user1 = new User("Risa",32);
    expect(user1.name).toEqual("Risa");
    expect(user1.age).toEqual(32);
    expect(user1.expectancy).toEqual(72);
  })
  test('should correctly return years left',()=>{
    const user1 = new User("Risa",32);
    expect(user1.name).toEqual("Risa");
    expect(user1.age).toEqual(32);
    expect(user1.expectancy).toEqual(72);
    expect(user1.yearsLeft).toEqual(40);
  })
  test('should correctly return life expectancy on each planet',()=>{
    const user1 = new User("Risa",32);
    expect(user1.name).toEqual("Risa");
    expect(user1.age).toEqual(32);
    expect(user1.expectancy).toEqual(72);
    expect(user1.expectMercury).toEqual(300);
    expect(user1.expectVenus).toEqual(116.12903225806451);
    expect(user1.expectMars).toEqual(38.297872340425535);
    expect(user1.expectJupiter).toEqual(6.070826306913997);
  })
  test('should correctly return years left on each planet',()=>{
    const user1 = new User("Risa",32);
    expect(user1.name).toEqual("Risa");
    expect(user1.age).toEqual(32);
    expect(user1.expectancy).toEqual(72);
    expect(user1.yearsLeftMercury).toEqual(166.66666666666666);
    expect(user1.yearsLeftVenus).toEqual(64.51612903225805);
    expect(user1.yearsLeftMars).toEqual(21.276595744680854);
    expect(user1.yearsLeftJupiter).toEqual(3.372681281618887);
  })
  test('should correctly return years past life expectancy', ()=>{
    const user2 =new User("Ester",80)
    expect(user2.name).toEqual("Ester");
    expect(user2.age).toEqual(80);
    expect(user2.expectancy).toEqual(72);
    expect(user2.overAge).toEqual(8);
  })
  test('should correctly return years past life expectancy on each planet', ()=>{
    const user2 =new User("Ester",80)
    expect(user2.name).toEqual("Ester");
    expect(user2.age).toEqual(80);
    expect(user2.expectancy).toEqual(72);
    expect(user2.overAge).toEqual(8);
    expect(user2.overAgeMercury).toEqual(33.333333333333336);
    expect(user2.overAgeVenus).toEqual(12.903225806451614);
    expect(user2.overAgeMars).toEqual(4.25531914893617);
    expect(user2.overAgeJupiter).toEqual(0.6745362563237775);
  })
});