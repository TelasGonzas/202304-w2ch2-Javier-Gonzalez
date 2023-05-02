import { strictEquals } from "./utils.js";

describe("Create a strictEquals function", () => {
  describe("When it receive two values (1,1)", () => {
    test("It should return true", () => {
      const valueA = 1;
      const valueB = 1;
      const expectedValue = strictEquals(valueA, valueB);
      const expectedResult = true;

      expect(expectedValue).toBe(expectedResult);
    });
  });
});
