import formatDate from "./formatDate";

describe("formatDate", () => {
  it("should return a string", () => {
    const date = new Date();
    const format = "yyyy-MM-dd";
    const result = formatDate(date, format);
    expect(typeof result).toBe("string");
  });

  it("should throw an error for invalid input", () => {
    const date = "01/01/2022"; // invalid date type
    const format = "yyyy-MM-dd";

    try {
      formatDate(date as any, format);
      // If the function does not throw an error, fail the test
      fail("Expected formatDate to throw an error.");
    } catch (error) {
      // Assert that the error thrown is an instance of Error
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe("Invalid date. Supply a valid Date object.");
    }
  });
});
