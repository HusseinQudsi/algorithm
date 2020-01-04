import arrayAlgorithm from '../script/algorithms/arrayAlgorithm.js';

const expect = require('chai').expect;
const arrayAlgorithmFnc = arrayAlgorithm();

describe('arrayAlgorithms', () => {

    describe('fibonaacci algorithm', () => {

      it('fibonaacci: Should match [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]', () => {

        const result = arrayAlgorithmFnc.fibonacci(12);
        const expectedOutPut = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

        expect(result).to.be.an('array');
        expect(result).to.include.ordered.members(expectedOutPut);
      });

      it('fibonaacci, bad input: Should return empty array.', () => {

        const result = arrayAlgorithmFnc.fibonacci("a");

        expect(result).to.be.an('array');
        expect(result).to.include.ordered.members([]);
      });

      it('fibonaacci, empty input: Should return empty array.', () => {

        const result = arrayAlgorithmFnc.fibonacci();

        expect(result).to.be.an('array');
        expect(result).to.include.ordered.members([]);
      });
    });

    describe('shuffle algorithm', () => {

      it('shuffle: Should return shuffled array with these values [5,2,1,3].', () => {

        const input = [5,2,1,3];
        const result = arrayAlgorithmFnc.shuffleArray(input.concat([]));

        expect(result).to.be.an('array');
        expect(result).to.include.not.ordered.members(input);
      });

      it('shuffle, bad input: should return empty array.', () => {

        const result = arrayAlgorithmFnc.shuffleArray("a");
        expect(result).to.be.an('array').that.is.empty;
      });

      it('shuffle, empty input: should return empty array.', () => {

        const result = arrayAlgorithmFnc.shuffleArray();
        expect(result).to.be.an('array').that.is.empty;
      });
    });

    describe('isSorted algorithm', () => {

      it('isSorted: should return false.', () => {

        const input = [6,3,4,5];
        const result = arrayAlgorithmFnc.isSorted(input.concat([]));

        expect(result).to.be.false;
      });

      it('isSorted: should return true.', () => {

        const input = [0,3,4,8];
        const result = arrayAlgorithmFnc.isSorted(input.concat([]));

        expect(result).to.be.true;
      });

      it('isSorted, bad input: should return false.', () => {

        const result = arrayAlgorithmFnc.isSorted("a");

        expect(result).to.be.false;
      });

      it('isSorted, empty input: should return false.', () => {

        const result = arrayAlgorithmFnc.isSorted("a");

        expect(result).to.be.false;
      });
    });

    describe('binarySearch algorithm', () => {

      it("binarySearch: Should return index 0.", () => {

        const input = [1,2,3,4,5,6,7,8,9,10];
        const target = 1;

        const result = arrayAlgorithmFnc.binarySearch(input, target);

        expect(result).to.equal(0);
      });

      it("binarySearch: Should return index 9.", () => {

        const input = [1,2,3,4,5,6,7,8,9,10];
        const target = 10;
        const result = arrayAlgorithmFnc.binarySearch(input, target);

        expect(result).to.equal(9);
      });

      it("binarySearch, bad input: should return -1.", () => {

        const result1 = arrayAlgorithmFnc.binarySearch([]);

        expect(result1).to.equal(-1);

        const result2 = arrayAlgorithmFnc.binarySearch(undefined,0);

        expect(result2).to.equal(-1);
      });

      it("binarySearch, empty input: should return -1.", () => {

        const result1 = arrayAlgorithmFnc.binarySearch();

        expect(result1).to.equal(-1);
      });
    });

    describe('binarySearchRecursive algorithm', () => {

      it(`binarySearchRecursive: should equal to 1`, () => {

        const input = [1,2,3,4,5,6,7,8,9,10];
        const target = 1;
        const result = arrayAlgorithmFnc.binarySearchRecursive(input, target);

        expect(result).to.equal(1);
      });

      it(`binarySearchRecursive: should equal to 10`, () => {

        const input = [1,2,3,4,5,6,7,8,9,10];
        const target = 10;
        const result = arrayAlgorithmFnc.binarySearchRecursive(input, target);

        expect(result).to.equal(10);
      });

      it("binarySearchRecursive, bad input: should equal to -1", () => {

        const result1 = arrayAlgorithmFnc.binarySearchRecursive([]);

        expect(result1).to.equal(-1);

        const result2 = arrayAlgorithmFnc.binarySearchRecursive(undefined,0);

        expect(result2).to.equal(-1);
      });

      it("binarySearchRecursive, empty input: should return -1.", () => {

        const result1 = arrayAlgorithmFnc.binarySearchRecursive();

        expect(result1).to.equal(-1);
      });
    });

    describe('bubbleSort algorithm', () => {

      it(`bubbleSort: should return array with values in this order [1,9,23,64,84,98,122,213,234,455,3223].`, () => {

        const input = [122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];
        const result = arrayAlgorithmFnc.bubbleSort(input);

        expect(result).to.include.ordered.members([1,9,23,64,84,98,122,213,234,455,3223]);
      });

      it('bubbleSort, bad input: should return empty array', () => {

        const result = arrayAlgorithmFnc.bubbleSort("a");

        expect(result).to.be.an('array');
        expect(result).to.include.ordered.members([]);
      });

      it('bubbleSort, empty input: should return empty array', () => {

        const result = arrayAlgorithmFnc.bubbleSort("a");

        expect(result).to.be.an('array').that.is.empty;
      });
    });

    describe('factorial algorithm', () => {

      it(`factorial: should return factorial value 24`, () => {

        const result = arrayAlgorithmFnc.factorial([2,3,4]);
        expect(result).to.equal(24);
      });

      it(`factorial, bad input: should return 0`, () => {

        const result = arrayAlgorithmFnc.factorial("bad");
        expect(result).to.equal(0);
      });

      it(`factorial, empty input: should return 0`, () => {

        const result = arrayAlgorithmFnc.factorial("bad");
        expect(result).to.equal(0);
      });
    });

    describe('chunkArray algorithm', () => {

      it(`chunkArray: should return a array of chunks`, () => {

        const result = arrayAlgorithmFnc.chunkArray([1,2,3,4,5,6,7,8,9], 4);

        expect(result).to.be.an('array');
        expect(result).to.have.deep.members([
          [1,2,3,4],
          [5,6,7,8],
          [9]
        ]);
      });

      it(`chunkArray, bad input: should return a empty array`, () => {

        const result = arrayAlgorithmFnc.chunkArray("bad", []);

        expect(result).to.be.an('array').that.is.empty;
      });

      it(`chunkArray, empty input: should return a empty array`, () => {

        const result = arrayAlgorithmFnc.chunkArray(undefined, []);

        expect(result).to.be.an('array').that.is.empty;
      });
    });

});
