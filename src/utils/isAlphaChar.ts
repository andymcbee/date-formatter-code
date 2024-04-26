export function isAlphaChar(string: string): boolean {
  if (typeof string !== "string") {
    throw new Error("Invalid input. isAlphaChar accepts a string as an input.");
  }

  if (string.length !== 1) {
    throw new Error(
      "Invalid input. isAlphaChar accepts a single char string as an input."
    );
  }

  const isAlpha = string.match(/[a-z]/i);
  if (isAlpha) {
    return true;
  } else {
    return false;
  }
}
