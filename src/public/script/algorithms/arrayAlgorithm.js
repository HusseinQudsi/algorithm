// https://www.youtube.com/watch?v=0cB4D65vsIQ&list=PL6cactdCCnTK7Su3WF--4jZdd5K-vk_78
// https://github.com/trekhleb/javascript-algorithms#data-structures

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
   * fibonacci array function.
   * @name fibonacci
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
   * Shuffling a array's positions.
   * #### Takeaways:
   * - Reverse loops
   * - Moving a array indexes around, within the array
   * @name shuffleArray
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
   * isSorted, if a array is sorted
   * #### Takeaways:
   * - Reverse Array
   * @name isSorted
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
   * binarySearch, searches a array through a binarySearch.
   * #### Takeaways:
   * - Logic, manipulating the while loop conditionally
   * @name binarySearch
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
   * binarySearchRecursive, searches a array through a binarySearch.
   * @name binarySearchRecursive
   * @param {array} array the array to be checked against target
   * @param {number} target the target to be found
   * @example binarySearchRecursive([1,2,3,4,5,6,7,8,9,10], 7);
   * @returns {number} returns the target value
   */
  function binarySearchRecursive(array, target, original) {

    if (!(array.length) || target !== +target) { return -1; }

    let mid = Math.floor(array.length >> 1);

    if (array[mid] === target) { return mid; }

    return (array[mid] < target) ?
      binarySearch(array.splice(mid), target, array) :
      binarySearch(array.splice(0, mid), target, array);
  }

  /**
   * bubbleSort, sorting a array using bubble sorting.
   * #### Takeaways:
   * - prac makes perfection
   * @name bubbleSort
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
   * factorial, the factorial of the array.
   * @name factorial
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
   * @name pascalsTriangle
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

  }

  /**
   * @name chunkArray
   * @param {array} array
   * @param {number} by
   * @example chunkArray([1,2,3,4,5,6,7,8,9], 4);
   * @returns {number} return a array of arracy chunks.
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


















// class LinkedListNode {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }


// https://humanwhocodes.com/blog/2019/01/computer-science-in-javascript-linked-list/
// debugger;
// // create the first node
// const head = new LinkedListNode(12);
//
// // add a second node
// head.next = new LinkedListNode(99);
//
// // add a third node
// head.next.next = new LinkedListNode(37);
