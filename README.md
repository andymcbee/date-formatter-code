## Usage:

import { dateToString } from "date-to-string-js";

// random example date object
const date = new Date("December 17, 1995");

const dateString = dateToString(date, "ddd mmm yyyy");
console.log(`Formatted date:: ${dateString}`);
// Sun Dec 1995

## Modifying String Format:

You can choose the type of seperator and format of how you'd like your string returned.

Pass your desired format as a string in the second argument.

### List of valid separator:

`/` Oblique stroke (slash)
`.` Full stop, dot or point (period)
`-` Hyphen (dash)
` ` Space

### List of valid parts:

`yy` – two-digit year, e.g. 24
`yyyy` – four-digit year, e.g. 2024
`m` – one-digit month for months below 10, e.g. 3
`mm` – two-digit month, e.g. 03
`mmm` – three-letter abbreviation for month, e.g. Mar
`mmmm` – month spelled out in full, e.g. March
`d` – one-digit day of the month for days below 10, e.g. 2
`dd` – two-digit day of the month, e.g. 02
`ddd` – three-letter abbreviation for day of the week, e.g. Fri
`dddd` – day of the week spelled out in full, e.g. Friday
