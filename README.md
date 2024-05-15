## Usage:

import { dateToString } from "date-to-string";<br><br>

const date = new Date("December 17, 1995");<br><br>

const dateString = dateToString(date, "ddd mmm yyyy");<br><br>
console.log(`Formatted date:: ${dateString}`);<br>
// Sun Dec 1995<br><br>

## Modifying String Format:

You can choose the type of seperator and format of how you'd like your string returned.<br><br>

Pass your desired format as a string in the second argument.<br><br>

### List of valid separator:

`/` Oblique stroke (slash)<br><br>
`.` Full stop, dot or point (period)<br><br>
`-` Hyphen (dash)<br><br>
` ` Space<br><br>

### List of valid parts:

`yy` – two-digit year, e.g. 24<br><br>
`yyyy` – four-digit year, e.g. 2024<br><br>
`m` – one-digit month for months below 10, e.g. 3<br><br>
`mm` – two-digit month, e.g. 03<br><br>
`mmm` – three-letter abbreviation for month, e.g. Mar<br><br>
`mmmm` – month spelled out in full, e.g. March<br><br>
`d` – one-digit day of the month for days below 10, e.g. 2<br><br>
`dd` – two-digit day of the month, e.g. 02<br><br>
`ddd` – three-letter abbreviation for day of the week, e.g. Fri<br><br>
`dddd` – day of the week spelled out in full, e.g. Friday<br><br>
