import applyDateFormat from "./applyDateFormat";
import { FormatParserResult } from "../inputFormatParser/inputFormatParser";

// note: this function is used within formatDate, which already checks that the date and parsedFormat array are valid
// thus we always assume these are valid in our testing

describe("applyDateFormat", () => {
  it("should return a valid date string, with space separator", () => {
    // input objects

    const date = new Date("December 17, 1995");
    const parsedFormat: FormatParserResult = {
      separator: " ",
      orderedFormat: ["d", "m", "yy"],
    };

    const formattedDateString = applyDateFormat(date, parsedFormat);

    expect(formattedDateString).toBe("17 12 95");
  });
});

describe("applyDateFormat", () => {
  it("should return a string with leading zeroes for month and day with short year, with - separator", () => {
    // input objects

    const date = new Date("April 5, 1995");
    const parsedFormat: FormatParserResult = {
      separator: "-",
      orderedFormat: ["dd", "mm", "yy"],
    };

    const formattedDateString = applyDateFormat(date, parsedFormat);

    expect(formattedDateString).toBe("05-04-95");
  });
});

describe("applyDateFormat", () => {
  it("should return with month and day written out in short form (Eg. Fri, Apr), and with / separator", () => {
    // input objects

    const date = new Date("December 17, 1995");
    const parsedFormat: FormatParserResult = {
      separator: "/",
      orderedFormat: ["ddd", "mmm", "yyyy"],
    };

    const formattedDateString = applyDateFormat(date, parsedFormat);

    expect(formattedDateString).toBe("Sun/Dec/1995");
  });
});

describe("applyDateFormat", () => {
  it("should return with month and day written out in long form (Eg. Friday, April), and with . separator", () => {
    // input objects

    const date = new Date("December 17, 1995");
    const parsedFormat: FormatParserResult = {
      separator: ".",
      orderedFormat: ["dddd", "mmmm", "yyyy"],
    };

    const formattedDateString = applyDateFormat(date, parsedFormat);

    expect(formattedDateString).toBe("Sunday.December.1995");
  });
});
