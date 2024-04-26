import applyDateFormat from "../applyDateFormat/applyDateFormat";
import { inputFormatParser } from "../inputFormatParser/inputFormatParser";

export type Result = string | Error;

export type InputFormat = string;

export type InputDate = Date;

export default function formatDate(
  date: InputDate,
  format: InputFormat
): Result {
  // ensure date is a Date object
  if (!(date instanceof Date)) {
    throw new Error("Invalid date. Supply a valid Date object.");
  }

  if (!format) {
    throw new Error("Format empty. Please provide a valid format string.");
  }

  if (typeof format !== "string") {
    throw new Error("Please provide a valid format string.");
  }

  // throw error if empty format value

  const parsedFormat = inputFormatParser(format);

  const formattedDate = applyDateFormat(date, parsedFormat);

  return formattedDate;
}
