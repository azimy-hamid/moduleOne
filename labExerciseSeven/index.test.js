const { add, sub, multi, div } = require("./index.js");

// Lab Exercise 7

// Using the functions you created for Exercise 4:
// • Write a specification comment for each function
// • Write at least 3 unit tests for each function
// • In the unit tests, try to include both expected and non-typical
// test values (such as zero or negative numbers)

// ------------ 3 Unit test for add() ------------
test("Adding 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("Adding -1 + 2 to equal 1", () => {
  expect(add(-1, 2)).toBe(1);
});

test("Adding 0 + 40 to equal 3", () => {
  expect(add(0, 40)).toBe(40);
});

// ------------ 3 Unit test for sub() ------------
test("Subtracting 1 from 2 to equal 1", () => {
  expect(sub(1, 2)).toBe(-1);
});

test("Subtracting -1 from -2 to equal 1", () => {
  expect(sub(-1, -2)).toBe(1);
});

test("Subtracting 0 from -23 to equal 23", () => {
  expect(sub(0, -23)).toBe(23);
});

// ------------ 3 Unit test for multi() ------------
test("Multiplying 1 by 2 to equal 2", () => {
  expect(multi(1, 2)).toBe(2);
});

test("Multiplying 0 by 12345 to equal 0", () => {
  expect(multi(0, 12345)).toBe(0);
});

test("Multiplying -10 by 2 to equal 2", () => {
  expect(multi(-10, 2)).toBe(-20);
});

// ------------ 3 Unit test for div() ------------
test("Dividing 2 from 2 to equal 1", () => {
  expect(div(2, 2)).toBe(1);
});

test("Dividing 0 from 2 to equal 0", () => {
  expect(div(0, 2)).toBe(0);
});

test("Dividing 0 from -2 to equal -0", () => {
  expect(div(0, -2)).toBe(-0);
});
