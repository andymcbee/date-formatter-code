import { isAlphaChar } from "./isAlphaChar";
describe("isAlphaChar", () => {
  it("should throw an error for invalid string input not equal to one char length", () => {
    const string = "abc";

    try {
      isAlphaChar(string);
      // If the function does not throw an error, fail the test
      fail("Expected isAlphaChar to throw an error.");
    } catch (error) {
      // Assert that the error thrown is an instance of Error
      expect(error).toBeInstanceOf(Error);
      expect((error as Error).message).toBe(
        "Invalid input. isAlphaChar accepts a single char string as an input."
      );
    }
  });
  it("should throw an error for invalid input", () => {
    const string = 1;

    try {
      // Mocking an error, allow any
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      isAlphaChar(string as any);
      // If the function does not throw an error, fail the test
      fail("Expected isAlphaChar to throw an error.");
    } catch (error) {
      // Assert that the error thrown is an instance of Error
      expect(error).toBeInstanceOf(Error);
      expect((error as Error).message).toBe(
        "Invalid input. isAlphaChar accepts a string as an input."
      );
    }
  });
});
