/*
Implements a recursive function to calculate the nth term of the Fibonacci sequence. 
The Fibonacci sequence starts with 0 and 1, and each subsequent term is the sum of the previous two (0,1,1,2,3,5,8).
*/


/**
 * 
 * @param {number} n a integer number
 * @returns {number}
 */
function recursiveFibonacci(n) {
  if (typeof n !== "number") return "Needs to be a number"
  if (n == 0 || n == 1) return n
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)
}
recursiveFibonacci(10) 


/*
Explanation: 
A recursive approach is used
The data type is checked first
The base case of the recursion is defined: If the number is equal to 0 or 1,
the number is returned
If not, then the function call is returned with the number decreased by 1 and 2 
(they would correspond to 1 and 0 in the last call)
*/