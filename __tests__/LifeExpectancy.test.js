import LifeExpectancy from "../src/js/LifeExpectancy";

describe("LifeExpectancy", () => {
  test("it should return LifeExpectancy class object", () => {
    let personLife = new LifeExpectancy();
    expect(personLife).toEqual(personLife);
  });

  test("it should return planetAge equals 0, checking for property intialized connection", () => {
    let personLife = new LifeExpectancy();
    expect(personLife.yearsLeft).toEqual(0);
  });

  test("yearsToLive method should take planetAge as a parameter and calculate years left to live based on 100 year average planet life", () => {
    let personLife = new LifeExpectancy();
    expect(personLife.yearsToLive(162)).toEqual(-62);
  });
});
