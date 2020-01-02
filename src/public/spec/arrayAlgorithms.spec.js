import arrayAlgorithm from '../script/algorithms/arrayAlgorithm.js';

const expect = require('chai').expect;
const arrayAlgorithmFnc = arrayAlgorithm();

describe('arrayAlgorithms', () => {

    describe('fibonaacci algorithm', () => {

      it('fibonaacci: 12 as input.', () => {

        const result = arrayAlgorithmFnc.fibonacci(12);
        const expectedOutPut = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

        expect(result).to.be.an('array');
        expect(result).to.include.ordered.members(expectedOutPut);
      });

      it('fibonaacci, bad input: "a" as input.', () => {

        const result = arrayAlgorithmFnc.fibonacci("a");

        expect(result).to.be.an('array');
        expect(result).to.include.ordered.members([]);
      });
    });

    describe('shuffle algorithm', () => {

      it('shuffle: [5,2,1,3] as input.', () => {

        const input = [5,2,1,3];
        const result = arrayAlgorithmFnc.shuffleArray(input.concat([]));

        expect(result).to.be.an('array');
        expect(result).to.include.not.ordered.members(input);
      });

      it('shuffle, bad input: "a" as input.', () => {

        const result = arrayAlgorithmFnc.shuffleArray("a");
        expect(result).to.be.an('array').that.is.empty;
      });

    });

    describe('isSorted algorithm', () => {

      it('isSorted: [6,3,4,5] as input, should return false', () => {

        const input = [6,3,4,5];
        const result = arrayAlgorithmFnc.isSorted(input.concat([]));

        expect(result).to.be.false;
      });

      it('isSorted: [0,3,4,8] as input, should return true', () => {

        const input = [0,3,4,8];
        const result = arrayAlgorithmFnc.isSorted(input.concat([]));

        expect(result).to.be.true;
      });

      it('isSorted: [0,3,4,8] as input, should return true', () => {

        const result = arrayAlgorithmFnc.isSorted("a");

        expect(result).to.be.false;
      });

    });

    describe('binarySearch algorithm', () => {

      const input = [1,2,3,4,5,6,7,8,9,10];
      const target = 1;

      it(`binarySearch: ${input} as input and ${target} as the target. Should return index 0`, () => {

        const result = arrayAlgorithmFnc.binarySearch(input, target);

        expect(result).to.equal(0);
      });

      const input2 = [1,2,3,4,5,6,7,8,9,10];
      const target2 = 10;

      it(`binarySearch: ${input2} as input and ${target2} as the target. Should return index 9`, () => {

        const result = arrayAlgorithmFnc.binarySearch(input2, target2);

        expect(result).to.equal(9);
      });

      it("binarySearch, bad input: missing parameters", () => {

        const result1 = arrayAlgorithmFnc.binarySearch([]);

        expect(result1).to.equal(-1);

        const result2 = arrayAlgorithmFnc.binarySearch(undefined,0);

        expect(result2).to.equal(-1);
      });
    });

    // describe('binarySearchRecursive algorithm', () => {
    //
    //   const input = [1,2,3,4,5,6,7,8,9,10];
    //   const target = 1;
    //
    //   it(`binarySearch: ${input} as input and ${target} as the target. Should return index 0`, () => {
    //
    //     const result = arrayAlgorithmFnc.binarySearchRecursive(input, target);
    //
    //     expect(result).to.equal(0);
    //   });
    //
    //   const input2 = [1,2,3,4,5,6,7,8,9,10];
    //   const target2 = 10;
    //
    //   it(`binarySearch: ${input2} as input and ${target2} as the target. Should return index 9`, () => {
    //
    //     const result = arrayAlgorithmFnc.binarySearchRecursive(input2, target2);
    //
    //     expect(result).to.equal(9);
    //   });
    //
    //   it("binarySearch, bad input: missing parameters", () => {
    //
    //     const result1 = arrayAlgorithmFnc.binarySearchRecursive([]);
    //
    //     expect(result1).to.equal(-1);
    //
    //     const result2 = arrayAlgorithmFnc.binarySearchRecursive(undefined,0);
    //
    //     expect(result2).to.equal(-1);
    //   });
    // });

    describe('bubbleSort algorithm', () => {

      const input = [122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];

      it(`bubbleSort: ${input} as input.`, () => {

        const result = arrayAlgorithmFnc.bubbleSort(input);

        expect(result).to.include.ordered.members([1,9,23,64,84,98,122,213,234,455,3223]);
      });

      it('bubbleSort, bad input: "a" as input.', () => {

        const result = arrayAlgorithmFnc.bubbleSort("a");

        expect(result).to.be.an('array');
        expect(result).to.include.ordered.members([]);
      });
    });

    describe('factorial algorithm', () => {

      it(`factorial: should return factorial value`, () => {

        const result = arrayAlgorithmFnc.factorial([2,3,4]);
        expect(result).to.equal(24);
      });

      it(`factorial: should return factorial value`, () => {

        const result = arrayAlgorithmFnc.factorial("bad");
        expect(result).to.equal(0);
      });
    });

    describe('chunkArray algorithm', () => {

      it(`chunkArray: should return a array of chunks`, () => {

        debugger;
        const result = arrayAlgorithmFnc.chunkArray([1,2,3,4,5,6,7,8,9], 4);

        expect(result).to.be.an('array');
        expect(result).to.have.deep.members([
          [1,2,3,4],
          [5,6,7,8],
          [9]
        ]);
      });

      it(`chunkArray: should return a empty array`, () => {

        debugger;
        const result = arrayAlgorithmFnc.chunkArray("bad", []);

        expect(result).to.be.an('array').that.is.empty;
      });
    });


});
