import type { InputDate, InputFormat } from "../../types";
import { isAlphaChar } from "../../utils/isAlphaChar";
const validSeparators = {
  " ": true,
  ".": true,
  "-": true,
  "/": true,
};

type DateFormatTokenKey = keyof typeof dateFormatTokens;

const dateFormatTokens = {
  d: "day",
  dd: "day",
  ddd: "day",
  dddd: "day",
  m: "month",
  mm: "month",
  mmm: "month",
  mmmm: "month",
  yy: "year",
  yyyy: "year",
};

type DayPart = "d" | "dd" | "ddd" | "dddd" | "";
type MonthPart = "m" | "mm" | "mmm" | "mmmm" | "";
type YearPart = "yy" | "yyyy" | "";
type separator = " " | "." | "-" | "/" | "";

export type FormatParserResult = {
  separator: separator;
  day: DayPart;
  month: MonthPart;
  year: YearPart;
  orderedFormat: Array<DayPart | MonthPart | YearPart>;
};

function isolateSeparator(inputFormat: string) {
  let separator = "";
  // identify first non-alpha char
  Array.from(inputFormat).forEach((char) => {
    if (!isAlphaChar(char)) {
      if (char in validSeparators) {
        // Assert `char` as `separator` type after checking it's a valid key
        separator = char as separator;
      } else {
        throw new Error("Invalid separator.");
      }
    }
  });

  // this is redundant. Alrerady threw an error if invalid.
  if (!separator) {
    throw new Error("No separator detected.");
  }
  return separator as separator;
}

export function inputFormatParser(inputFormat: InputFormat) {
  const inputFormatLowcase = inputFormat.toLowerCase();
  /*   // this is redundant because isolateSeparator will throw an error if null
  // confirm first char is alpha
  if (!isAlphaChar(inputFormatLowcase[0])) {
    throw new Error("Invalid format structure.");
  } */

  //isolate separator
  const separator = isolateSeparator(inputFormatLowcase);

  const formatArray = inputFormatLowcase.split(separator);

  let validFormat: FormatParserResult = {
    separator: "",
    day: "",
    month: "",
    year: "",
    orderedFormat: [],
  };

  validFormat["separator"] = separator;

  // construct valid parsed format
  for (let i = 0; i < formatArray.length; i++) {
    const part = formatArray[i];

    //confirm it is valid

    if (!(part in dateFormatTokens)) {
      throw Error("Invalid format part.");
    }

    if (dateFormatTokens[part as DateFormatTokenKey] === "day") {
      if (validFormat.day) {
        throw Error("Duplicate day part detected.");
      } else {
        validFormat["day"] = part as DayPart;
        validFormat.orderedFormat.push(part as DayPart);
      }
    }
    if (dateFormatTokens[part as DateFormatTokenKey] === "month") {
      //confirm day doesnt exist already
      if (validFormat.month) {
        throw Error("Duplicate month part detected.");
      } else {
        validFormat["month"] = part as MonthPart;
        validFormat.orderedFormat.push(part as MonthPart);
      }
    }
    if (dateFormatTokens[part as DateFormatTokenKey] === "year") {
      //confirm day doesnt exist already
      if (validFormat.year) {
        throw Error("Duplicate year part detected.");
      } else {
        validFormat["year"] = part as YearPart;
        validFormat.orderedFormat.push(part as YearPart);
      }
    }

    //confirm it does not exist in validFormatArray

    // add it to the array
  }

  // confirm all required parts of result object exist

  if (
    !validFormat.day ||
    !validFormat.month ||
    !validFormat.year ||
    !validFormat.separator
  ) {
    throw Error(
      "Invalid format provided. Include valid day, month year and separator."
    );
  } else {
    return validFormat;
  }
}