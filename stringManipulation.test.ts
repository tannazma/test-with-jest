import {
  getLength,
  reverseString,
  toLowerCase,
  toUpperCase,
} from "./stringManipulation";

test("reverse string function", () => {
  expect(reverseString("tannaz")).toBe("zannat");
});

test("toUpperCase function", () => {
  expect(toUpperCase("tannaz")).toBe("TANNAZ");
});

test("toLowerCase function", () => {
  expect(toLowerCase("TANNAZ")).toBe("tannaz");
});

test("to getLength function", () => {
  expect(getLength("TANNAZ")).toBe(6);
});
