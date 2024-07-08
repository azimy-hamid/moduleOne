console.log("-------------- PART ONE --------------");

function add(a,b){
    return a + b;
}

function sub(a,b){
    return a - b;
}

function multi(a,b){
    return a * b;
}

function div(a,b){
    return a / b;
}

console.log("1 + 2 = : ", add(1, 2));
console.log("1 - 2 = : : ", sub(1, 2));
console.log("1 * 2 = : : ", multi(1, 2));
console.log("1 / 2 = : : ", div(2, 2));


console.log("-------------- PART TWO --------------");

function greet(name){
    console.log(`Hello ${name}`);
}

greet("Hamid")