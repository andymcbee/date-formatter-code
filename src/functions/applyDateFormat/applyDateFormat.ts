import type { Result, InputDate } from "../formatDate/formatDate";
import type { FormatParserResult } from "../inputFormatParser/inputFormatParser";

function removeLeadingZeros(string: string) {
  while (string.charAt(0) === "0") {
    string = string.substring(1);
  }

  return string;
}

type DayOfWeek = "0" | "1" | "2" | "3" | "4" | "5" | "6";

const dayOfWeekFull = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
};

const dayOfWeekShort = {
  0: "Sun",
  1: "Mon",
  2: "Tue",
  3: "Wed",
  4: "Thu",
  5: "Fri",
  6: "Sat",
};

type Month =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11";

const monthOfYearFull = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December",
};

const monthOfYearShort = {
  0: "Jan",
  1: "Feb",
  2: "Mar",
  3: "Apr",
  4: "May",
  5: "Jun",
  6: "Jul",
  7: "Aug",
  8: "Sep",
  9: "Oct",
  10: "Nov",
  11: "Dec",
};

type DateFormatKey = keyof typeof dateFormatFunctions;

type DateFormatKeyArray = DateFormatKey[];

function formatYearYyyy(year: number): string {
  return year.toString();
}

function formatYearYy(year: number): string {
  return year.toString().slice(-2);
}

function formatDayD(day: number): string {
  return day.toString();
}

function formatDayDd(day: number): string {
  console.log("Test");
  if (day < 10) {
    console.log("If triggered");
    return "0" + day.toString();
  }
  return day.toString();
}

function formatDayDdd(day: DayOfWeek): string {
  return dayOfWeekShort[day];
}

function formatDayDddd(day: DayOfWeek): string {
  return dayOfWeekFull[day];
}

function formatMonthM(month: Month): string {
  //convert zero-indexed month value to one-indexed
  const monthValue = (Number(month) + 1).toString();
  return monthValue;
}

function formatMonthMm(month: Month): string {
  const monthValueNumber = Number(month) + 1;
  if (monthValueNumber < 10) {
    console.log("If triggered");
    return "0" + monthValueNumber.toString();
  }
  return monthValueNumber.toString();
}

function formatDayMmm(month: Month): string {
  return monthOfYearShort[month];
}
function formatDayMmmm(month: Month): string {
  return monthOfYearFull[month];
}

// Updated object where all values are functions.
const dateFormatFunctions = {
  d: formatDayD,
  dd: formatDayDd,
  ddd: formatDayDdd,
  dddd: formatDayDddd,
  m: formatMonthM,
  mm: formatMonthMm,
  mmm: formatDayMmm,
  mmmm: formatDayMmmm,
  yy: formatYearYy,
  yyyy: formatYearYyyy,
};

export default function applyDateFormat(
  date: InputDate,
  parsedFormat: FormatParserResult
): Result {
  // date and format have both been checked for issues
  // assume they are valid.

  const dayOfMonth = date.getDate();
  const dayOfWeek = date.getDay() as unknown as DayOfWeek;
  const month = date.getMonth();
  const year = date.getFullYear();

  // date.getMonth() returns a leading zero.
  // Remove leading zeroes so we can treat it with the same logic as days.
  const monthNoLeadingZeroes = removeLeadingZeros(month.toString()) as Month;

  const parsedFormatArray: DateFormatKeyArray = parsedFormat.orderedFormat;

  // this is the final formatted date string that will be built and returned
  let formattedFullDate = "";

  for (let i = 0; i < parsedFormatArray.length; i++) {
    const format = parsedFormatArray[i];

    let formattedString = "";
    switch (format) {
      case "yyyy":
        formattedString = dateFormatFunctions[format](year);
        formattedFullDate = formattedFullDate + formattedString;
        break;
      case "yy":
        formattedString = dateFormatFunctions[format](year);
        formattedFullDate = formattedFullDate + formattedString;
        break;
      case "d":
        formattedString = dateFormatFunctions[format](dayOfMonth);
        formattedFullDate = formattedFullDate + formattedString;
        break;
      case "dd":
        formattedString = dateFormatFunctions[format](dayOfMonth);
        formattedFullDate = formattedFullDate + formattedString;
        break;
      case "ddd":
        formattedString = dateFormatFunctions[format](dayOfWeek);
        formattedFullDate = formattedFullDate + formattedString;
        break;
      case "dddd":
        formattedString = dateFormatFunctions[format](dayOfWeek);
        formattedFullDate = formattedFullDate + formattedString;
        break;
      case "m":
        formattedString = dateFormatFunctions[format](monthNoLeadingZeroes);
        formattedFullDate = formattedFullDate + formattedString;
        break;
      case "mm":
        formattedString = dateFormatFunctions[format](monthNoLeadingZeroes);
        formattedFullDate = formattedFullDate + formattedString;
        break;

      case "mmm":
        formattedString = dateFormatFunctions[format](monthNoLeadingZeroes);
        formattedFullDate = formattedFullDate + formattedString;
        break;

      case "mmmm":
        formattedString = dateFormatFunctions[format](monthNoLeadingZeroes);
        formattedFullDate = formattedFullDate + formattedString;
        break;
    }

    // add separator to string, except for last item in formatArray
    if (i < parsedFormatArray.length - 1) {
      formattedFullDate = formattedFullDate + parsedFormat.separator;
    }
  }

  // return fully built string
  return formattedFullDate;
}
