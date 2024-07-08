const numberOfOrdersPerMonth = [123, 213, 435, 102, 654];

console.log("---------------------------------------------");
console.log("Original Array");
console.log(numberOfOrdersPerMonth);
console.log("---------------------------------------------");
console.log("\n");


numberOfOrdersPerMonth[1] = 900;
numberOfOrdersPerMonth[4] = 1000;
console.log("---------------------------------------------");
console.log("After changing the values in indices 1 and 4");
console.log(numberOfOrdersPerMonth);
console.log("---------------------------------------------");
console.log("\n");


numberOfOrdersPerMonth.unshift(100);
console.log("---------------------------------------------");
console.log("After adding an element in the beginning of the array");
console.log(numberOfOrdersPerMonth);
console.log("---------------------------------------------");
console.log("\n");


numberOfOrdersPerMonth.pop();
console.log("---------------------------------------------");
console.log("After removing the last element of the array");
console.log(numberOfOrdersPerMonth);
console.log("---------------------------------------------");
console.log("\n");

