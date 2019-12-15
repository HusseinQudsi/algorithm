import arrayAlgorithm from '../script/arrayAlgorithm.js';
const expect = require('chai').expect;


describe('arrayAlgorithms', () => {

    const arrayAlgorithmFnc = arrayAlgorithm();

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


});
