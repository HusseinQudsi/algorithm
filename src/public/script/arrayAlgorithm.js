export default function arrayAlgorithms() {

  return {
    fibonacci,
    shuffleArray,
    isSorted,
    binarySearch
  };

  /**
   * fibonacci array function.
   * @name Fibonacci
   * @param {number} length will return a array of fibonacci sequence at  that length
   * @example [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]
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
   * Shuffling a array's positions.
   * #### Takeaways:
   * - Reverse loops
   * - Moving a array indexes around, within the array
   * @name shuffleArray
   * @param {array} array the array to be shuffled
   * @example [1, 2, 144, 200]
   * @returns {array} return the shuffled array [1, 2, 200, 144]
   */
  function shuffleArray(array = []) {

    if (!(Array.isArray(array))) { return []; }

    // Reverse loop:
    let i = (array.length - 1);

    for(i; i > 0; i--) { // i > 0 will not run at last index.

      let randomIndexWithInArrayLength = Math.floor(Math.random() * i);
      let originalPostition = array[i]; // Last index, @example: 200

      // Shuffling:
      array[i] = array[randomIndexWithInArrayLength];
      array[randomIndexWithInArrayLength] = originalPostition;
    }

    return array;
  }

  /**
   * isSorted, if a array is sorted
   * #### Takeaways:
   * - Reverse Array
   * @name isSorted
   * @param {array} array the array to be checked if sorted
   * @example [1, 2, 144, 200]
   * @returns {array} return boolean
   */
  function isSorted(array = []) {

    if (!(Array.isArray(array))) { return false; }

    let i = 0;
    let lastIndex = (array.length - 1);

    for (lastIndex; lastIndex > i; lastIndex--) {

      if (array[lastIndex] < array[lastIndex - 1]) {

        return false;
      }
    }

    return true;
  }

  /**
   * binarySearch, searches a array through a binarySearch.
   * #### Takeaways:
   * -
   * @name binarySearch
   * @param {array} array the array to be checked against target
   * @param {number} target the target to be found
   * @example [1,2,3,4,5,6,7,8,9,10]
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
}
