export default function stringAlgorithms() {

  return {
    addNewMethodHere,
    numberIsPrimeTest
    // TODO: create the following methods:
    // stringTextEllipsis,
    // stringReverse,
    // stringCheckPalindrome
  };

  /**
   * Takeaways
   * - Loops
   * - Math operational condtion
   * @param {number} num
   * @example numberIsPrimeTest(10);
   * @returns {boolean} return true/false.
   */
  function numberIsPrimeTest(number = 0) {

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
   * #### Takeaways:
   * - You can add your method to stringAlgorithms here.
   * @param {string} str
   * @example addNewMethodHere("hello world");
   * @returns {string} return string.
   */
  function addNewMethodHere(str = "") {
    return str;
  }
}
