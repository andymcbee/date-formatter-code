import formatDate from "./functions/formatDate/formatDate";

const date = new Date("December 17, 1995");

const result = formatDate(date, "ddd-mmm-yyyy");
console.log(`Formatted date:: ${result}`);
