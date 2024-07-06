/*
4- Palindrome
Write a function that determines whether a text string is a palindrome. 
A palindrome is a word or phrase that reads the same backwards and forwards, regardless of spaces, punctuation marks, or upper/lower case.
*/


/**
 * 
 * @param {string} str a string that would be used to the comparation 
 * @returns {string} a string that say if it's a palindrome
 */
function checkPalindrome(str) {
  if (typeof str !== "string") return "needs to be an string"
  let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '')
  let reversedStr = cleanedStr.split('').reverse().join('')
  
  if (reversedStr == cleanedStr) return "It's an palindrome!"
  return "It's not a palindrome"
}
checkPalindrome("lol") // "It's an palindrome"


/*
Explanation:
A text string is supported.
The data type check is performed.
First the clean string is stored without having been rolled back.
Then use the different string methods to flip the string.
The comparison is made and depending on the result, one message or another is displayed. 
*/