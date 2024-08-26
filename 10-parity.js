/* 
Write a function parity that takes an array of numbers as an argument and returns an object with two properties: pares and impares. The pares property should be an array containing all the even numbers from the input array, and the impares property should be an array containing all the odd numbers.
*/

/**
 * 
 * @param {Array<Number>} arr an array of number
 * @returns object 
 */

function parity(arr) {
  const objResult = {
    pares: [],
    impares: []
  }
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      objResult.pares.push(arr[i])
    } else {
      objResult.impares.push(arr[i])
    }
  }
  return objResult
}
// parity([1,2,3,4,5,6])

/*
Explanation:
- An array of numbers is received.
- An empty object `objResult` is created with two properties: `pares` (for even numbers) and `impares` (for odd numbers), both initialized as empty arrays.
- A `for` loop is used to iterate through each number in the input array.
- Inside the loop, the function checks if the current number is even (`arr[i] % 2 === 0`). If it is, the number is added to the `pares` array.
- If the current number is odd, it is added to the `impares` array.
- The final object `objResult`, containing the arrays of even and odd numbers, is returned.
*/
