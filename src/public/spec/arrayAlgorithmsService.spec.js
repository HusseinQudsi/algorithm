import arrayAlgorithm from '../script/algorithms/arrayAlgorithmService.js';

const expect = require('chai').expect;
const arrayAlgorithmFnc = arrayAlgorithm();

describe('arrayAlgorithms', () => {

    describe('fibonaacci algorithm', () => {

      it('fibonaacci: Should match [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]', () => {

        const result = arrayAlgorithmFnc.arrayFibonacci(12);
        const expectedOutPut = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

        expect(result).to.be.an('array');
        expect(result).to.include.ordered.members(expectedOutPut);
      });

      it('fibonaacci, bad input: Should return empty array.', () => {

        const result = arrayAlgorithmFnc.arrayFibonacci("a");

        expect(result).to.be.an('array');
        expect(result).to.include.ordered.members([]);
      });

      it('fibonaacci, empty input: Should return empty array.', () => {

        const result = arrayAlgorithmFnc.arrayFibonacci();

        expect(result).to.be.an('array');
        expect(result).to.include.ordered.members([]);
      });
    });

    describe('shuffle algorithm', () => {

      it('shuffle: Should return shuffled array with these values [5,2,1,3].', () => {

        const input = [5,2,1,3];
        const result = arrayAlgorithmFnc.arrayShuffle(input.concat([]));

        expect(result).to.be.an('array');
        expect(result).to.include.not.ordered.members(input);
      });

      it('shuffle, bad input: should return empty array.', () => {

        const result = arrayAlgorithmFnc.arrayShuffle("a");
        expect(result).to.be.an('array').that.is.empty;
      });

      it('shuffle, empty input: should return empty array.', () => {

        const result = arrayAlgorithmFnc.arrayShuffle();
        expect(result).to.be.an('array').that.is.empty;
      });
    });

    describe('isSorted algorithm', () => {

      it('isSorted: should return false.', () => {

        const input = [6,3,4,5];
        const result = arrayAlgorithmFnc.arrayIsSorted(input.concat([]));

        expect(result).to.be.false;
      });

      it('isSorted: should return true.', () => {

        const input = [0,3,4,8];
        const result = arrayAlgorithmFnc.arrayIsSorted(input.concat([]));

        expect(result).to.be.true;
      });

      it('isSorted, bad input: should return false.', () => {

        const result = arrayAlgorithmFnc.arrayIsSorted("a");

        expect(result).to.be.false;
      });

      it('isSorted, empty input: should return false.', () => {

        const result = arrayAlgorithmFnc.arrayIsSorted("a");

        expect(result).to.be.false;
      });
    });

    describe('binarySearch algorithm', () => {

      it("binarySearch: Should return index 0.", () => {

        const input = [1,2,3,4,5,6,7,8,9,10];
        const target = 1;

        const result = arrayAlgorithmFnc.arrayBinarySearch(input, target);

        expect(result).to.equal(0);
      });

      it("binarySearch: Should return index 9.", () => {

        const input = [1,2,3,4,5,6,7,8,9,10];
        const target = 10;
        const result = arrayAlgorithmFnc.arrayBinarySearch(input, target);

        expect(result).to.equal(9);
      });

      it("binarySearch, bad input: should return -1.", () => {

        const result1 = arrayAlgorithmFnc.arrayBinarySearch([]);

        expect(result1).to.equal(-1);

        const result2 = arrayAlgorithmFnc.arrayBinarySearch(undefined,0);

        expect(result2).to.equal(-1);
      });

      it("binarySearch, empty input: should return -1.", () => {

        const result1 = arrayAlgorithmFnc.arrayBinarySearch();

        expect(result1).to.equal(-1);
      });
    });

    describe('binarySearchRecursive algorithm', () => {

      it(`binarySearchRecursive: should equal to 1`, () => {

        const input = [1,2,3,4,5,6,7,8,9,10];
        const target = 1;
        const result = arrayAlgorithmFnc.arrayBinarySearchRecursive(input, target);

        expect(result).to.equal(1);
      });

      it(`binarySearchRecursive: should equal to 10`, () => {

        const input = [1,2,3,4,5,6,7,8,9,10];
        const target = 10;
        const result = arrayAlgorithmFnc.arrayBinarySearchRecursive(input, target);

        expect(result).to.equal(10);
      });

      it("binarySearchRecursive, bad input: should equal to -1", () => {

        const result1 = arrayAlgorithmFnc.arrayBinarySearchRecursive([]);

        expect(result1).to.equal(-1);

        const result2 = arrayAlgorithmFnc.arrayBinarySearchRecursive(undefined,0);

        expect(result2).to.equal(-1);
      });

      it("binarySearchRecursive, empty input: should return -1.", () => {

        const result1 = arrayAlgorithmFnc.arrayBinarySearchRecursive();

        expect(result1).to.equal(-1);
      });
    });

    describe('bubbleSort algorithm', () => {

      it(`bubbleSort: should return array with values in this order [1,9,23,64,84,98,122,213,234,455,3223].`, () => {

        const input = [122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];
        const result = arrayAlgorithmFnc.arrayBubbleSort(input);

        expect(result).to.include.ordered.members([1,9,23,64,84,98,122,213,234,455,3223]);
      });

      it('bubbleSort, bad input: should return empty array', () => {

        const result = arrayAlgorithmFnc.arrayBubbleSort("a");

        expect(result).to.be.an('array');
        expect(result).to.include.ordered.members([]);
      });

      it('bubbleSort, empty input: should return empty array', () => {

        const result = arrayAlgorithmFnc.arrayBubbleSort("a");

        expect(result).to.be.an('array').that.is.empty;
      });
    });

    describe('factorial algorithm', () => {

      it(`factorial: should return factorial value 24`, () => {

        const result = arrayAlgorithmFnc.arrayFactorial([2,3,4]);
        expect(result).to.equal(24);
      });

      it(`factorial, bad input: should return 0`, () => {

        const result = arrayAlgorithmFnc.arrayFactorial("bad");
        expect(result).to.equal(0);
      });

      it(`factorial, empty input: should return 0`, () => {

        const result = arrayAlgorithmFnc.arrayFactorial("bad");
        expect(result).to.equal(0);
      });
    });

    describe('chunkArray algorithm', () => {

      it(`chunkArray: should return a array of chunks`, () => {

        const result = arrayAlgorithmFnc.arrayChunk([1,2,3,4,5,6,7,8,9], 4);

        expect(result).to.be.an('array');
        expect(result).to.have.deep.members([
          [1,2,3,4],
          [5,6,7,8],
          [9]
        ]);
      });

      it(`chunkArray, bad input: should return a empty array`, () => {

        const result = arrayAlgorithmFnc.arrayChunk("bad", []);

        expect(result).to.be.an('array').that.is.empty;
      });

      it(`chunkArray, empty input: should return a empty array`, () => {

        const result = arrayAlgorithmFnc.arrayChunk(undefined, []);

        expect(result).to.be.an('array').that.is.empty;
      });
    });

    describe('pascalsTriangle algorithm', () => {

      it('pascalsTriangle: should return pascals triangle of 7 indexes', () => {

        const result = arrayAlgorithmFnc.arrayPascalsTriangle(6);
        const expectedOutPut = [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1],[1,5,10,10,5,1],[1,6,15,20,15,6,1]];

        expect(result).to.be.an('array');
        expect(result).to.have.deep.members(expectedOutPut);
      });

      it('pascalsTriangle, bad input: Should return empty array.', () => {

        const result = arrayAlgorithmFnc.arrayPascalsTriangle("a");

        expect(result).to.be.an('array');
        expect(result).to.include.ordered.members([]);
      });

      it('pascalsTriangle, empty input: Should return empty array.', () => {

        const result = arrayAlgorithmFnc.arrayPascalsTriangle();

        expect(result).to.be.an('array');
        expect(result).to.include.ordered.members([]);
      });
    });
});
