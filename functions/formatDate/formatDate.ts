import type { Result, InputDate, InputFormat } from "../../types";
import { inputFormatParser } from "../inputFormatParser/inputFormatParser";

export default function formatDate(
  date: InputDate,
  format: InputFormat
): Result {
  // ensure date is a Date object
  if (!(date instanceof Date)) {
    throw new Error("Invalid date. Supply a valid Date object.");
  }

  const parsedFormat = inputFormatParser(format);

  console.log("Parsed format:::");
  console.log(parsedFormat);
  return "test";
}
