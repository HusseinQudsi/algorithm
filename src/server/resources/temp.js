// <script type="text/javascript">
//
// function arrayAlgorithms() {
//
//
//   /**
//    * fibonacci array function.
//    * @name Fibonacci
//    * @param {number} length will return a array of fibonacci sequence at  that length
//    * @example [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]
//    * @returns {array} return the array of fibonacci sequence
//    */
//   const fibonacci = (
//
//     function fibonacci(length = 0) {
//
//       if (+length !== length) { return []; }
//
//       const fibonacciArray = [1, 1];
//
//       while (length > 0) {
//
//         let atIndex = fibonacciArray[fibonacciArray.length - 2];
//         let nextIndex = fibonacciArray[fibonacciArray.length - 1];
//
//         fibonacciArray.push(atIndex + nextIndex);
//         length--;
//       }
//
//       return fibonacciArray;
//     }
//   );
//
//   /**
//    * Shuffling a array's positions.
//    * #### Takeaways:
//    * - Reverse loops
//    * - Moving a array indexes around, within the array
//    * @name shuffleArray
//    * @param {array} array the array to be shuffled
//    * @example [1, 2, 144, 200]
//    * @returns {array} return the shuffled array [1, 2, 200, 144]
//    */
//   const shuffleArray = (
//     function shuffleArray(array = []) {
//
//       if (!(Array.isArray(array))) { return []; }
//
//       // Reverse loop:
//       let lastIndex = (array.length - 1);
//
//       for(lastIndex; lastIndex > 0; lastIndex--) {
//
//         let randomIndexWithInArrayLength = Math.floor(Math.random() * lastIndex);
//         let originalPostition = array[lastIndex];
//
//         // Shuffling:
//         array[lastIndex] = array[randomIndexWithInArrayLength];
//         array[randomIndexWithInArrayLength] = originalPostition;
//       }
//
//       return array;
//     }
//   );
//
//   /**
//    * isSorted, if a array is sorted
//    * #### Takeaways:
//    * - Reverse Array
//    * @name isSorted
//    * @param {array} array the array to be checked if sorted
//    * @example [1, 2, 144, 200]
//    * @returns {array} return boolean
//    */
//   const isSorted = (
//
//     function isSorted(array = []) {
//
//       if (!(Array.isArray(array))) { return false; }
//
//       let lastIndex = (array.length - 1);
//
//       for (lastIndex; lastIndex > 0; lastIndex--) {
//
//         if (array[lastIndex] < array[lastIndex - 1]) {
//
//           return false;
//         }
//       }
//
//       return true;
//     }
//   );
//
//   /**
//    * binarySearch, searches a array through a binarySearch.
//    * #### Takeaways:
//    * - Logic, manipulating the while loop conditionally
//    * @name binarySearch
//    * @param {array} array the array to be checked against target
//    * @param {number} target the target to be found
//    * @example [1,2,3,4,5,6,7,8,9,10]
//    * @returns {number} returns the index of input
//    */
//   const binarySearch = (
//
//     function binarySearch(array = [], target = 0) {
//
//
//       if (!(Array.isArray(array))) { return -1; }
//       target = Number(target);
//
//       let left = 0;
//       let right = (array.length - 1);
//
//       while(right >= left) {
//
//         let minPoint = (right - left) / 2;
//         let mid = left + Math.floor(minPoint);
//
//         if (array[mid] === target) { return mid; }
//
//         if (array[mid] < target) {
//
//             left = mid + 1;
//
//         } else {
//
//             right = mid - 1;
//         }
//
//       }
//
//       return -1;
//     }
//   );
//
//   /**
//    * bubbleSort, sorting a array using bubble sorting.
//    * #### Takeaways:
//    * - prac makes perfection
//    * @name bubbleSort
//    * @param {array} array the array to be checked against target
//    * @example [122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
//    * @returns {number} returns the sorted array
//    */
//   const bubbleSort = (
//
//     function bubbleSort(array = []) {
//
//       if (!(Array.isArray(array))) { return []; }
//
//       let length = array.length;
//       let found;
//
//       do {
//
//         let i = 0;
//         found = false;
//
//         for (i; i < length; i++) {
//
//           if (array[i] > array[i + 1]) {
//
//             let temp = array[i + 1];
//
//             array[i + 1] = array[i];
//             array[i] = temp;
//
//             found = true;
//           }
//         }
//       } while(found)
//
//       return array;
//     }
//   );
//
//   /**
//    * factorial, the factorial of the array.
//    * @name factorial
//    * @param {array} array the array to be caculated
//    * @example factorial [122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
//    * @returns {number} returns the factorial number value of the array.
//    */
//   const factorial = (
//
//     function factorial(array = []) {
//
//       debugger;
//
//       if (!(Array.isArray(array))) { return 0; }
//
//       let factorial = 1;
//       let length = (array.length - 1);
//
//       for(length; length >= 0; length--) {
//
//         factorial = factorial * array[length];
//       }
//
//       return factorial;
//     }
//   );
//
//   return {
//     fibonacci,
//     shuffleArray,
//     isSorted,
//     binarySearch,
//     bubbleSort,
//     factorial
//   };
// }
//
//
//
// const algorithms = arrayAlgorithms();
//
//
//   setTimeout(function() {
//
//     // adding textArea:
//     const textareaTemplate = (`
//         <textarea name="name" rows="8" cols="80"></textarea>
//         <button type="button" name="button">click</button>
//     `);
//
//     const preTags = document.getElementsByTagName('pre');
//
//     [].forEach.call(preTags, (el) => {
//
//       const div = document.createElement('div');
//
//       div.innerHTML = textareaTemplate;
//       el.parentElement.append(div);
//     });
//
//
//
//
//     const algorithmsMethodsNames = Object.keys(algorithms);
//     const sections = document.querySelectorAll('h3[id]');
//
//     [].forEach.call(sections, (el) => {
//
//       const name = el.innerText.replace(/^\w/, (w) => w.toLowerCase());
//       const method = algorithmsMethodsNames[algorithmsMethodsNames.indexOf(name)];
//
//       if (method) {
//
//         const section = el.parentElement.parentElement;
//         const textarea = section.getElementsByTagName('textarea');
//
//         if (textarea.length) {
//
//             const preTag = section.getElementsByTagName('pre')[0];
//             textarea[0].innerHTML = `${preTag.innerText}\n\n${algorithms[method]}`;
//         }
//
//       }
//
//     });
//
//
//
//
//
//
//
//
//     const playgroundEventHandler = document.getElementsByTagName('button');
//
//     [].forEach.call(playgroundEventHandler, (el) => {
//
//       el.addEventListener('click', (event) => {
//
//         const section = event.target.parentElement.parentElement;
//         const name = section.getElementsByTagName('h3')[0].innerText;
//         const fncName = name.replace(/^\w/, (w) => w.toLowerCase());
//         const textarea = section.getElementsByTagName('textarea');
//         const preTag = section.getElementsByTagName('pre')[0];
//         const fnc = textarea[0].value;
//         // const fnc = preTag.innerText + textarea[0].value;
//
//         alert(eval(eval('fnc')));
//       });
//     });
//
//
//   }, 1000);
//
//
//
//
//
// </script>
