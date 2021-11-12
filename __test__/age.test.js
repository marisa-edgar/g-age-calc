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
    expect(user1.mercury).toEqual(133.33);
    expect(user1.venus).toEqual(51.61);
    expect(user1.mars).toEqual(17.02);
    expect(user1.jupiter).toEqual(2.69);

  })
});