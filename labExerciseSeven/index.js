console.log("-------------- PART ONE --------------");

// The below function take two integers and returns the sum of both numbers
function add(a, b) {
  return a + b;
}

// The below function take two integers and returns the subtraction of both numbers
function sub(a, b) {
  return a - b;
}

// The below function take two integers and returns the multiplication of both numbers
function multi(a, b) {
  return a * b;
}

// The below function take two integers and returns the division of both numbers
function div(a, b) {
  return a / b;
}

console.log("1 + 2 = : ", add(1, 2));
console.log("1 - 2 = : : ", sub(1, 2));
console.log("1 * 2 = : : ", multi(1, 2));
console.log("1 / 2 = : : ", div(2, 2));

console.log("-------------- PART TWO --------------");

function greet(name) {
  console.log(`Hello ${name}`);
}

greet("Hamid");

module.exports = {
  add,
  sub,
  multi,
  div,
};
