import { inputFormatParser } from "./inputFormatParser";

describe("inputFormatParser", () => {
  it("Should return a FormatParserResult object with no null values", () => {
    const validFormat = "dd-mm-yyyy";
    const result = inputFormatParser(validFormat);

    expect(result.separator).toBe("-");
    expect(result.orderedFormat).toEqual(["dd", "mm", "yyyy"]);
  });

  it("should throw an error if in invalid separator is detected", () => {
    const invalidSeparator = "yyyy|MM|dd";

    try {
      inputFormatParser(invalidSeparator);
      // If the function does not throw an error, fail the test
      fail("Expected inputFormatParser to throw an error.");
    } catch (error) {
      // Assert that the error thrown is an instance of Error
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe("Invalid separator.");
    }
  });

  it("should throw an error if no separator is detected", () => {
    const noSeparator = "yyyyMMdd";

    try {
      inputFormatParser(noSeparator);
      // If the function does not throw an error, fail the test
      fail("Expected inputFormatParser to throw an error.");
    } catch (error) {
      // Assert that the error thrown is an instance of Error
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe("No separator detected.");
    }
  });

  it("should throw an error due to duplicate day parts", () => {
    const format = "dd-d-yyyy";

    try {
      inputFormatParser(format);
      // If the function does not throw an error, fail the test
      fail("Expected inputFormatParser to throw an error.");
    } catch (error) {
      // Assert that the error thrown is an instance of Error
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe("Duplicate day part detected.");
    }
  });

  it("should throw an error due to duplicate month parts", () => {
    const format = "mm-mm-yyyy";

    try {
      inputFormatParser(format);
      // If the function does not throw an error, fail the test
      fail("Expected inputFormatParser to throw an error.");
    } catch (error) {
      // Assert that the error thrown is an instance of Error
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe("Duplicate month part detected.");
    }
  });

  it("should throw an error due to duplicate year parts", () => {
    const format = "dd-yy-yyyy";

    try {
      inputFormatParser(format);
      // If the function does not throw an error, fail the test
      fail("Expected inputFormatParser to throw an error.");
    } catch (error) {
      // Assert that the error thrown is an instance of Error
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe("Duplicate year part detected.");
    }
  });
});
