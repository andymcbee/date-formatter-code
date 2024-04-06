import formatDate from "./formatDate";

describe("formatDate", () => {
  it("should return a string", () => {
    const date = new Date();
    const format = "yyyy-MM-dd";
    const result = formatDate(date, format);
    expect(typeof result).toBe("string");
  });
});
