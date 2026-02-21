// Calculator using function to perform add,sub,mul,div of two integers provide by user//

let num1 = 30;
let num2 = 10;

//addition function
function add(num1, num2) {
    return num1 + num2;
  }
  console.log(add(num1, num2));
  
  //subtraction function
  function subtract(num1, num2) {
    return num1 - num2;
  }
  console.log(subtract(num1, num2));

  //multiplication function
  function multiply(num1, num2) {
    return num1 * num2;
  }
  console.log(multiply(num1, num2));
  
  //division function
  function divide(num1, num2) {
    if (num2 !== 0) {
      return num1 / num2;
    } else {
      return "Cannot divide by zero";
    }
  }  
  console.log(divide(num1,num2));
  
//output//
40
20
300
3


 