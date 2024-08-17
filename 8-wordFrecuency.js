/* Given a paragraph of text, write a function that returns an object where the keys are the words and the values ​​are the number of times each word appears in the text. For example, "hello world hello" should return { hello: 2, world: 1 }. */

/**
 * 
 * @param {str} str a string that represents a paragraph
 * @returns Object
 */
function wordFrecuency(str) {
  const wordObject = {}
  
  const cleanedStr = str.replace(/[^\w\s]/g, '').toLowerCase();
  const wordArr = cleanedStr.split(/\s+/);
  
  wordArr.forEach((key) => {
    if (wordObject[key]) {
      wordObject[key]++
    } else {
      wordObject[key] = 1
    }
  })
  return wordObject
}
wordFrecuency('Ellos durmieron y a la vez que durmieron, parecían que morían, como morían las flores en el alba.')

/* 
Explanation: 
A string is received.
An empty object is created.
This string is cleaned and then transformed into an array.
A forEach is used to do the operations.
If the property already exists, it is only incremented by 1
If the property does not exist, it is initialized to 1
The object is returned at the end.
*/