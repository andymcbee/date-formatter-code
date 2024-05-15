import formatDate from "./functions/formatDate/formatDate";

export function dateToString(date: Date, format: string) {
  return formatDate(date, format);
}
