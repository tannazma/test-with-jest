import { sum, subtract } from "./index";
 
test("two plus two is four", () => {
    // const summedNumbers = 2 + 2;
    expect(sum(2,2)).toBe(4);
  });
 
test("subtract function", () => {
  expect(subtract(10, 7)).toBe(3);
});