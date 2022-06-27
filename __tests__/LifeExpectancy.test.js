import LifeExpectancy from "../src/js/LifeExpectancy";

describe('LifeExpectancy', () => {
  test('it should return LifeExpectancy class object', () => {
    let personLife = new LifeExpectancy();
    expect(personLife).toEqual(personLife);
  });

  test('it should return planetAge equals 0, checking for property intialized connection', () => {
    let personLife = new LifeExpectancy();
    expect(personLife.yearsLeft).toEqual(0);
  });

  test('yearsToLive method should take planetAge as a parameter and calculate years left to live based on 100 year average planet life', () => {
    let personLife = new LifeExpectancy();
    expect(personLife.yearsToLive(162)).toEqual(-62);
  });

  test('longevity method should check yearsLeft if it is a negative number if the planetAge was greater than 100, return positive number to reveal longevity', () => {
    let personLife = new LifeExpectancy();
    expect(personLife.longevity(-63)).toEqual(63);
  });
});