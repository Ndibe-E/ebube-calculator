import process from 'process';  // Built-in module
import promptSync from 'prompt-sync';  // Third-party module
import { add, subtract, multiply, divide } from './my_modules/calculator.js'; // Custom module

const prompt = promptSync();

console.log(("\n=== Simple Calculator ===\n"));

console.log(`
Select an operation:
'+' → Addition
'-' → Subtraction
'*' → Multiplication
'/' → Division
`);

const validOperators = ['+', '-', '*', '/'];

// Get first number
const num1 = parseFloat(prompt("Enter the first number: "));
if (isNaN(num1)) {
  console.log(("❌ Invalid input. First number must be numeric."));
  process.exit(1);
}


// Get second number
const num2 = parseFloat(prompt("Enter the second number: "));
if (isNaN(num2)) {
  console.log(("❌ Invalid input. Second number must be numeric."));
  process.exit(1);
}

// Get operator and validate
const operator = prompt("Enter operator (+, -, *, /): ");
if (!validOperators.includes(operator)) {
  console.log((`❌ Invalid operator. Please use one of: ${validOperators.join(', ')}`));
  process.exit(1);//means failure or error
}


if (operator === '/' && num2 === 0) {
  console.log(("❌ Cannot divide by zero."));
  process.exit(2);
}

// Perform operation
let result;
switch (operator) {
  case '+':
    result = add(num1, num2);
    break;
  case '-':
    result = subtract(num1, num2);
    break;
  case '*':
    result = multiply(num1, num2);
    break;
  case '/':
    result = divide(num1, num2);
    break;
}

console.log((`\n✅The Result: ${num1} ${operator} ${num2} = ${result}\n`));
