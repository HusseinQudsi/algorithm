export default function numberAlgorithms() {

  return {
    isPrime,
    greatestCommonDivisor,
    lowestCommonMultiplier,
    // convertBinary,
    // convertDecimal,
    // binaryOr,
    // binaryAnd,
    // binaryShiftLeft,
    // binaryShiftRight
  };

  /**
   * Takeaways
   * - Loops
   * - Math operational condtion
   * @param {number} num
   * @example isPrime(10);
   * @returns {boolean} return true/false.
   */
  function isPrime(number = 0) {

    if (number !== +number) { return false; }
    if (number < 2) { return false; }

    let i = 2;

    while (i < number) {

      if (number % i === 0) {

        return false;
      }

      i++;
    }

    return true;
  }

  /**
   * Takeaways
   * - Arguments
   * - Logic, mathematical opeational
   * - Recursive
   * @param {number} numA
   * @param {number} numB
   * @example greatestCommonDivisor(84,104);
   * @returns {number} return the greatest common divisor.
   */
  function greatestCommonDivisor(numA, numB) {

    if (numA !== +numA || numB !== +numB) { return 0; }

    if (!numB) {
      return numA;
    }

    let inputsMax = Math.max(...arguments);
    let inputsMin = Math.min(...arguments);
    let gCD = inputsMax % inputsMin;

    return greatestCommonDivisor(inputsMin, gCD);
  }

  /**
   * Takeaways
   * - Has depenancy on greatestCommonDivisor
   * - Logic, mathematical opeational
   * @param {number} numA
   * @param {number} numB
   * @example lowestCommonMultiplier(104,84);
   * @returns {number} return the lowest common multiplier.
   */
  function lowestCommonMultiplier(numA, numB) {

    if (numA !== +numA || numB !== +numB) { return 0; }

    return ((numA === 0) || (numB === 0)) ?
      0 :
      Math.abs(numA * numB) / greatestCommonDivisor(numA, numB);

    // From other section.
    function greatestCommonDivisor(numA, numB) {

      if (numA !== +numA || numB !== +numB) { return 0; }

      if (!numB) {
        return numA;
      }

      let inputsMax = Math.max(...arguments);
      let inputsMin = Math.min(...arguments);
      let gCD = inputsMax % inputsMin;

      return greatestCommonDivisor(inputsMin, gCD);
    }
  }

  // TODO: add Unit Test:
  // /**
  //  * Takeaways
  //  * -bit, 1 digit.
  //  * -byte, 8 bit
  //  * -kilobyte, 1000 byte
  //  * @param {number} num
  //  * @example convertBinary(3);
  //  * @returns {string}
  //  */
  // function convertBinary(num) {
  //
  //   if (num !== +num) { return 0; }
  //
  //   return (num).toString(2);
  // }
  //
  // /**
  //  * @param {number} num
  //  * @example convertDecimal(3);
  //  * @returns {number}
  //  */
  // function convertDecimal(num) {
  //
  //   if (num !== +num) { return 0; }
  //
  //   return parseInt(num , 2)
  // }
  //
  // /**
  //  * @param {number} num
  //  * @param {number} by
  //  * @example binaryShiftRight(10, 1);
  //  * @returns {number}
  //  */
  // function binaryShiftRight(num, by) {
  //
  //   if (num !== +num || by !== +by) { return 0; }
  //
  //   return num >> by;
  // }
  //
  // /**
  //  * @param {number} num
  //  * @param {number} by
  //  * @example binaryShiftLeft(10, 1);
  //  * @returns {number}
  //  */
  // function binaryShiftLeft(num, by) {
  //
  //   if (num !== +num || by !== +by) { return 0; }
  //
  //   return num << by;
  // }
  //
  // /**
  //  * @param {number} num
  //  * @param {number} by
  //  * @example binaryAnd(10, 1);
  //  * @returns {number}
  //  */
  // function binaryAnd(num, by) {
  //
  //   if (num !== +num || by !== +by) { return 0; }
  //
  //   return num & by;
  // }
  //
  // /**
  //  * @param {number} num
  //  * @param {number} by
  //  * @example binaryOr(10, 1);
  //  * @returns {number}
  //  */
  // function binaryOr(num, by) {
  //
  //   if (num !== +num || by !== +by) { return 0; }
  //
  //   return num | by;
  // }

}
