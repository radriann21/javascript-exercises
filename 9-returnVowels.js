/* 
Given a string or a parragraph, write a function that returns the quantity of vowels present in the string.
*/

/**
 * 
 * @param {string} str a string 
 * @returns number
 */

function returnVowels(str) {
  const vowels = 'aeiou'
  const cleanedStr = str.toLowerCase().split('')
  let result = 0
  
  for (let i = 0; i < cleanedStr.length; i++) {
    if (vowels.includes(cleanedStr[i])) result++
  }
  return result
}
// returnVowels('hello')

/*
Explanation: 
A string is received.
Create an constant with the vowels (withour special characters)
Create a constant with the cleaned version of the string
A variable with the quantity of vowels
A for loop is created and, in every iteration, if some vowel is present in the cleaned version of the string, the result add one.
Then, return the result
*/