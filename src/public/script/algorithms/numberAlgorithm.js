export default function numberAlgorithms() {

  return {
    isPrime
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

}
