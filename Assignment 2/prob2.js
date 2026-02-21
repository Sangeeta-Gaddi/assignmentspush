//Calculator to perform sum,substraction,multiplication and division which takes two inputs without using functions//

let num1 = 10;
let num2 = 5;

//Addition
let add = num1 + num2;
console.log(add)

//Substraction
let sub = num1 - num2;
console.log(sub);

// Multiplication
let mul = num1 * num2;
console.log(mul);

// Division
if (num2 !== 0) {
  let div = num1 / num2;
  console.log(div );
} else {
  console.log("Cannot divide by zero");
}

//output//
15
5
50
2