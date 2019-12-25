export default function numberAlgorithms() {

  return {
    isPrime,
    greatestCommonDivisor
  };

  /**
   * fibonacci array function.
   * @name isPrime
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
   * greatestCommonDivisor array function.
   * @name greatestCommonDivisor
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

}
