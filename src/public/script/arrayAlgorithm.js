export default function arrayAlgorithms() {

  return {
    fibonacci,
    shuffleArray,
    isSorted,
    // filter,
    // missing,
    // intersection,
    // includes
  };

  /**
   * fibonacci array function.
   * @name Fibonacci
   * @param {number} length will return a array of fibonacci sequence at  that length
   * @example [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]
   * @returns {array} return the array of fibonacci sequence
   */
  function fibonacci(length = 0) {

    const fibonacciArray = [1, 1];

    if (+length !== length) { return []; }

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
   * Take aways:
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
   * Take aways:
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
}
