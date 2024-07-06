/*
5-Bubble Sort 
Implements a bubble sort algorithm to sort an array of numbers in ascending order. 
Bubble sort compares pairs of adjacent elements and swaps them if they are in the wrong order.
*/

/**
 * 
 * @param {Array<number>} arr an array of numbers
 * @returns {Array<number>} an array of number ordened in ascending order
 */
function bubbleSort(arr) {
  if (!Array.isArray(arr)) return "needs to be an array"
  if (arr.length == 0) return "needs to have something!"
  
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}
bubbleSort([5, 3, 8, 4, 2]) // [2,3,4,5,8]


/* 

*/