export default function arrayAlgorithms() {

  return {
    fibonacci,
    shuffleArray,
    isSorted,
    binarySearch,
    binarySearchRecursive,
    bubbleSort,
    factorial,
    pascalsTriangle,
    chunkArray
  };

  /**
   * #### Takeaways:
   * - Initiating array
   * - Looping and populating fibonacci numbers
   * @param {number} length will return a array of fibonacci sequence at  that length
   * @example fibonacci(10);
   * @returns {array} return the array of fibonacci sequence
   */
  function fibonacci(length = 0) {

    if (+length !== length) { return []; }

    const fibonacciArray = [1, 1];

    while (length > 0) {

      let atIndex = fibonacciArray[fibonacciArray.length - 2];
      let nextIndex = fibonacciArray[fibonacciArray.length - 1];

      fibonacciArray.push(atIndex + nextIndex);
      length--;
    }

    return fibonacciArray;
  }

  /**
   * #### Takeaways:
   * - Reverse loops
   * - Randomly selecting array indexes
   * - Moving a array indexes around, within the array
   * @param {array} array the array to be shuffled
   * @example shuffleArray([1, 2, 144, 200]);
   * @returns {array} return the shuffled array [1, 2, 200, 144]
   */
  function shuffleArray(array = []) {

    if (!(Array.isArray(array))) { return []; }

    // Reverse loop:
    let lastIndex = (array.length - 1);

    for(lastIndex; lastIndex > 0; lastIndex--) {

      let randomIndexWithInArrayLength = Math.floor(Math.random() * lastIndex);
      let originalPostition = array[lastIndex];

      // Shuffling:
      array[lastIndex] = array[randomIndexWithInArrayLength];
      array[randomIndexWithInArrayLength] = originalPostition;
    }

    return array;
  }

  /**
   * #### Takeaways:
   * - Reverse loops
   * - Checking conditionally
   * @param {array} array the array to be checked if sorted
   * @example isSorted([1, 2, 144, 200]);
   * @returns {array} return boolean
   */
  function isSorted(array = []) {

    if (!(Array.isArray(array))) { return false; }

    let lastIndex = (array.length - 1);

    for (lastIndex; lastIndex > 0; lastIndex--) {

      if (array[lastIndex] < array[lastIndex - 1]) {

        return false;
      }
    }

    return true;
  }

  /**
   * #### Takeaways:
   * - Logic, manipulating the while loop conditionally
   * - Logic, finding the center of the array
   * - Logic, checking the left or right half of the array.
   * @param {array} array the array to be checked against target
   * @param {number} target the target to be found
   * @example binarySearch([1,2,3,4,5,6,7,8,9,10], 7);
   * @returns {number} returns the index of input
   */
  function binarySearch(array = [], target = 0) {

    if (!(Array.isArray(array))) { return -1; }
    if (+target !== target) { return -1; }

    let left = 0;
    let right = (array.length - 1);

    while(right >= left) {

      let minPoint = (right - left) / 2;
      let mid = left + Math.floor(minPoint);

      if (array[mid] === target) { return mid; }

      if (array[mid] < target) {

          left = mid + 1;

      } else {

          right = mid - 1;
      }

    }

    return -1;
  }

  /**
   * #### Takeaways:
   * - Logic, finding the center of the array
   * - Logic, checking the left or right half of the array.
   * @param {array} array the array to be checked against target
   * @param {number} target the target to be found
   * @example binarySearchRecursive([1,2,3,4,5,6,7,8,9,10], 7);
   * @returns {number} returns data at index
   */
  function binarySearchRecursive(array, target) {

    if (!(Array.isArray(array)) || !(array.length) || target !== +target) {
      return -1;
    }

    let mid = Math.floor(array.length >> 1);

    if (array[mid] === target) { return array[mid]; }

    return (array[mid] < target) ?
      binarySearchRecursive(array.splice(mid), target) :
      binarySearchRecursive(array.splice(0, mid), target);
  }

  /**
   * #### Takeaways:
   * - Variable scopes
   * - Loops within loops
   * - Swapping array indexes
   * - Conditionally iterations
   * @param {array} array the array to be checked against target
   * @example bubbleSort([122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]);
   * @returns {number} returns the sorted array
   */
  function bubbleSort(array = []) {

    if (!(Array.isArray(array))) { return []; }

    let length = array.length;
    let found;

    do {

      let i = 0;
      found = false;

      for (i; i < length; i++) {

        if (array[i] > array[i + 1]) {

          let temp = array[i + 1];

          array[i + 1] = array[i];
          array[i] = temp;

          found = true;
        }
      }
    } while(found)

    return array;
  }

  /**
   * #### Takeaways:
   * - Looping
   * - Math operations
   * @param {array} array the array to be caculated
   * @example factorial([122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]);
   * @returns {number} returns the factorial number value of the array.
   */
  function factorial(array = []) {

    if (!(Array.isArray(array))) { return 0; }

    let factorial = 1;
    let length = (array.length - 1);

    for(length; length >= 0; length--) {

      factorial = factorial * array[length];
    }

    return factorial;
  }

  /**
   * #### Takeaways:
   * - Initiating array
   * - Loops within loops
   * - Logic, building array indexes
   * - Logic, conditionally iterations
   * @param {number} rows
   * @example pascalsTriangle(6);
   * @returns {number} return a array of pascalsTriangle.
   */
  function pascalsTriangle(rows) {

    const pascalsTriangle = [
      [1]
    ];

    do {

      let nextIndex = pascalsTriangle.length - 1;
      let nextArray = pascalsTriangle[nextIndex];
      let length = nextArray.length;
      let newArray = [];

      for (length; length > -1; length--) {

        newArray.push((nextArray[length - 1] || 0) + (nextArray[length] || 0));
      }

      pascalsTriangle.push(newArray);
      rows--;
    } while(rows)

    return pascalsTriangle;
  }

  /**
   * #### Takeaways:
   * - Initiating array
   * - Logic, building array indexes.
   * @param {array} array
   * @param {number} by
   * @example chunkArray([1,2,3,4,5,6,7,8,9], 4);
   * @returns {number} return a array of array chunks.
   */
  function chunkArray(array, by) {

      if ((!Array.isArray(array)) || by !== +by) { return []; }

      const chunksArray = [];

      while(array.length) {
        chunksArray.push(array.splice(0,by));
      }

      return chunksArray;
  }

}
