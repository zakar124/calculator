const display = document.querySelector(".display");

let add = (a, b) => a + b;

let subtract = (a, b) => a - b;

let multiply = (a, b) => a * b;

let divide = (a, b) => a / b;

// let operate = function (operator, num1, num2) {

// };

let operator = function (operator1, a, b) {
  switch (operator1) {
    case "add":
      display.textContent = add(a, b);
      break;

    case "subtract":
      display.textContent = subtract(a, b);
      break;

    case "multiply":
      display.textContent = multiply(a, b);
      break;

    case "divide":
      display.textContent = divide(a, b);
      break;

    default:
      display.textContent = "No value found";
  }
};

operator("divide", 10, 2);
operator("multiply", 10, 2);
