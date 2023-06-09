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
  describe("When it receive two values (NaN,NaN)", () => {
    test("It should return false", () => {
      const valueA = NaN;
      const valueB = NaN;
      const expectedValue = strictEquals(valueA, valueB);
      const expectedResult = false;

      expect(expectedValue).toBe(expectedResult);
    });
  });
  describe("When it receive two values (0,-0)", () => {
    test("It should return true", () => {
      const valueA = 0;
      const valueB = -0;
      const expectedValue = strictEquals(valueA, valueB);
      const expectedResult = true;

      expect(expectedValue).toBe(expectedResult);
    });
  });
  describe("When it receive two values (-0,0)", () => {
    test("It should return true", () => {
      const valueA = -0;
      const valueB = 0;
      const expectedValue = strictEquals(valueA, valueB);
      const expectedResult = true;

      expect(expectedValue).toBe(expectedResult);
    });
  });
  describe("When it receive two values (1,'1')", () => {
    test("It should return false", () => {
      const valueA = 1;
      const valueB = "1";
      const expectedValue = strictEquals(valueA, valueB);
      const expectedResult = false;

      expect(expectedValue).toBe(expectedResult);
    });
  });
  describe("When it receive two values (true,false)", () => {
    test("It should return false", () => {
      const valueA = true;
      const valueB = false;
      const expectedValue = strictEquals(valueA, valueB);
      const expectedResult = false;

      expect(expectedValue).toBe(expectedResult);
    });
  });
  describe("When it receive two values (false,false)", () => {
    test("It should return true", () => {
      const valueA = false;
      const valueB = false;
      const expectedValue = strictEquals(valueA, valueB);
      const expectedResult = true;

      expect(expectedValue).toBe(expectedResult);
    });
  });
  describe("When it receive two values ('water','oil')", () => {
    test("It should return false", () => {
      const valueA = "water";
      const valueB = "oil";
      const expectedValue = strictEquals(valueA, valueB);
      const expectedResult = false;

      expect(expectedValue).toBe(expectedResult);
    });
  });
});
