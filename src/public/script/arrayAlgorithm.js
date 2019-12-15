export default function arrayAlgorithms() {

  return {
    fibonacci,
    shuffleArray,
    // isSorted,
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
   * @name shuffleArray
   * @param {array} array the array to be shuffled
   * @example [1, 2, 144, 200]
   * @returns {array} return the shuffled array [1, 2, 200, 144]
   */
  function shuffleArray(array = []) {

    let i = (array.length - 1);

    for(i; i > 0; i--){

      const j = Math.floor(Math.random() * i)

      const temp = array[i]

      array[i] = array[j]
      array[j] = temp;
    }

    return array;

    // [1, 2, 144, 200]

    // let i = 0
    // while(array.length > i) { fnc(); r++;}
    //
    // function fnc() {
    //
    //   array.splice(0, Math.random(array.length))
    //   array.unshift()
    // }

  }
}
