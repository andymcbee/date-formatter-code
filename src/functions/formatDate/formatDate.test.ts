import formatDate from "./formatDate";

describe("formatDate", () => {
  it("should return a string", () => {
    const date = new Date();
    const format = "yyyy-MM-dd";
    const result = formatDate(date, format);
    expect(typeof result).toBe("string");
  });

  it("should throw an error for invalid date input", () => {
    const date = "01/01/2022"; // invalid date type
    const format = "yyyy-MM-dd";

    try {
      // allow any because we are mocking an error
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      formatDate(date as any, format);
      // If the function does not throw an error, fail the test
      fail("Expected formatDate to throw an error.");
    } catch (error) {
      // Assert that the error thrown is an instance of Error
      expect(error).toBeInstanceOf(Error);
      expect((error as Error).message).toBe(
        "Invalid date. Supply a valid Date object."
      );
    }
  });

  it("should throw an error for missing format input", () => {
    const date = new Date();
    const format = "";

    try {
      // allow any because we are mocking an error
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      formatDate(date as any, format);
      // If the function does not throw an error, fail the test
      fail("Expected formatDate to throw an error.");
    } catch (error) {
      // Assert that the error thrown is an instance of Error
      expect(error).toBeInstanceOf(Error);
      expect((error as Error).message).toBe(
        "Format empty. Please provide a valid format string."
      );
    }
  });

  it("should throw an error for non-string format input", () => {
    const date = new Date();
    // allow any because we are mocking an error
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const format = 21423 as any;

    try {
      // allow any because we are mocking an error
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      formatDate(date as any, format);
      // If the function does not throw an error, fail the test
      fail("Expected formatDate to throw an error.");
    } catch (error) {
      // Assert that the error thrown is an instance of Error
      expect(error).toBeInstanceOf(Error);
      expect((error as Error).message).toBe(
        "Please provide a valid format string."
      );
    }
  });
});
