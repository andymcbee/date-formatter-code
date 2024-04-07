Run program:

Add desired data (date and format type) to index.ts
npm run start

Run test suite:
npm run test

> **TASKS**
>
> Create a function that given a Date and a string format, returns a string representation of the date, with the specified format.
>
> A valid format is a string composed by 3 parts joined by a separator.
>
> `e.g. mm/dd/yyyy ` in this example "/" is the separator and the 3 parts are `mm`, `dd` and `yyyy`
>
> List of valid separator:
> `/` Oblique stroke (slash)
> `.` Full stop, dot or point (period)
> `-` Hyphen (dash)
> ` ` Space
>
> List of valid parts:
> `yy` – two-digit year, e.g. 24
> `yyyy` – four-digit year, e.g. 2024
> `m` – one-digit month for months below 10, e.g. 3
> `mm` – two-digit month, e.g. 03
> `mmm` – three-letter abbreviation for month, e.g. Mar
> `mmmm` – month spelled out in full, e.g. March
> `d` – one-digit day of the month for days below 10, e.g. 2
> `dd` – two-digit day of the month, e.g. 02
> `ddd` – three-letter abbreviation for day of the week, e.g. Fri
> `dddd` – day of the week spelled out in full, e.g. Friday
>
> e.g.
> `format(new Date(), 'dd mmmm yyyy') // 17 Mar 2024`
>
> **NOTES**
>
> - The date input can be any structure that is used to represent dates or timestamps in your programming language.
> - Try to implement the function step by step, gradually adding the different format part to be recognized and committing to the repo
