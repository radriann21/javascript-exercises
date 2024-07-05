/* 
2. Factorial
Create a function that calculates the factorial of a given number. 
The factorial of a positive integer 𝑛 
it's defined as the product of all positive integers from 1 to 𝑛
*/

/**
 * 
 * @param {number} n non-negative number 
 * @returns the product of multiplications of all the numbers from 1 to n
 */


function factorial(n) {
  if (typeof n !== "number") return "Error: Needs to be a number"
  if (n < 0) return "The number needs to be non-negative"
  
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
factorial(5)

/*
Explanation:
An iterative approach is used. No recursion is required.
The data type and whether it's a non-negative number are validated.
Both the result and the loop control variable are set to the value of 1.
In each iteration, the value stored in the result is multiplied by the current value of the control variable.
At the end of the loop, the multiplication of all possible values ​​from 1 to the given number is returned.
*/