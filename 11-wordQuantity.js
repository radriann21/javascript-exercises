/* 
Write a function wordQuantity that takes a string as an argument and returns the number of words in that string. The function should consider words as sequences of characters separated by spaces. If there are multiple consecutive spaces or spaces at the beginning or end of the string, they should be handled appropriately to avoid counting incorrect words.
*/


/**
 * 
 * @param {String} str a string or parragraph
 * @returns number
 */

function wordQuantity(str) {
  let transformedStr = str.split(' ')
  let words = 0
  for (let word of transformedStr) {
    if (word === ' ' || word === '') continue
    words++
  }
  return words
}
// wordQuantity('Hello')

/*
Explanation:
- A string is received.
- The string is split into an array using a space (' ') as the delimiter.
- A variable `words` is initialized to 0 to keep track of the word count.
- A `for...of` loop is used to iterate over each element (word) in the transformed array.
- Inside the loop, if the current element is a space or an empty string, it is skipped using `continue`.
- If the current element is a valid word (i.e., not a space or empty string), the `words` counter is incremented by 1.
- The final count of words is returned.
*/
