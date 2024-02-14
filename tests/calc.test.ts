import { add, multiply } from "../src/calc";

describe("test calc add", () => {
  it("should return 15 for add(10, 5)", () => {
    expect(add(10, 5)).toBe(15);
  });
  it("should return 5 for add add(2, 3)", () => {
    expect(add(2, 3)).toBe(5);
  });
});

describe("test calc multiply", () => {
  it("should return 25 from multiply(5, 5)", () => {
    expect(multiply(5, 5)).toBe(25);
  });
});
