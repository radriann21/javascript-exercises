/* Escribe una función que tome un array y devuelva un nuevo array sin elementos duplicados. Por ejemplo, [1, 2, 2, 3, 4, 4, 5] debería transformarse en [1, 2, 3, 4, 5].*/

/**
 * 
 * @param {Array} arr an array of numbers
 * @returns Array
 */

function noDuplicates(arr) {
  const set = new Set()
  for (let i = 0; i < arr.length; i++) {
    set.add(arr[i])
  }
  return Array.from(set)
}
noDuplicates([2,3,6,1,2,3,4,6])


/* Alternative */
function noDuplicates(arr) {
  const set = new Set(arr)
  return Array.from(set)
}
noDuplicates([2,3,6,1,2,3,4,6])

/* 
Explanation: 
An array of numbers is received.
An empty set is created.
A for iterates over the array adding elements to the set, if the element already exists, it is not added to the Set.
In the end, an Array made from the set is returned.
*/

