/*
Given a string containing a phrase, write a function that reverses the order of the words in the phrase. For example, "Hello world from JavaScript" should be transformed into "JavaScript from Hello world".
*/

/**
 * 
 * @param {string} str a string
 * @returns string
 */
function reverseString(str) {
  if (str === '' || typeof str === 'string') return "please, write a string"
  return str.split(' ').reverse().join(' ')
}
reverseString('Hello World from JS')

/*
Explanation:
A string is received.
It is validated if it exists or if it really is a string.
It is then transformed into an array to be reversed and transformed back to a string using the join method.
*/