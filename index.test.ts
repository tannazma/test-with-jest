import { sum, subtract, multiply, divide, primeNumbers } from "./index";

test("two plus two is four", () => {
  // const summedNumbers = 2 + 2;
  expect(sum(2, 2)).toBe(4);
});

test("subtract function", () => {
  expect(subtract(10, 7)).toBe(3);
});

test("multiply function", () => {
  expect(multiply(10, 2)).toBe(20);
});

test("divide function", () => {
  expect(divide(10, 2)).not.toBe(6);
});

test("prime numbers function", () => {
  expect(primeNumbers).toContain(7);
  expect(primeNumbers).not.toContain(8);
});
