/* 
1. Add all the pairs 
Write a function that takes a positive integer as a parameter and returns the sum of all even numbers less than or equal to that number.
*/


/**
 * 
 * @param {num} num A positive number used for the loop.
 * @returns A positive number
 */
function addAllEvens(num) {
  if (typeof num !== "number") return "The input needs to be a number";
  if (num < 2) return "The number needs to be positive and up or equal 2";
  
  let result = 0;
  
  for (let i = num; i >= 2; i--) {
    if (i % 2 !== 0) continue;
    result += i;
  }
  return result;
}
sumAllEvens(12) // 42

/*
Explanation:
The function gets a parameter called num. This number is validated both in data type and if it's positive.
A result variable is created with a value of zero.
A for loop is created that takes the given number as a control variable. As long as this number is greater than or equal to two, the iteration will continue.
Each iteration will subtract one unit from the control variable. If the number in the current iteration is not even, the iteration is skipped.
If it's even, it is added and equaled in the result variable.
When the loop ends, result is returned.
*/

