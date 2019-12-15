import arrayAlgorithm from '../script/arrayAlgorithm.js';

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

        const z = arrayAlgorithmFnc.fibonacci("a");
        const zz = [];

        expect(z).to.be.an('array');
        expect(zz).to.include.ordered.members(zz);
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

});
