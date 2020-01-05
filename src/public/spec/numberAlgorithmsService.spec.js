import numberAlgorithms from '../script/algorithms/numberAlgorithmService.js';

const expect = require('chai').expect;
const numberAlgorithmFnc = numberAlgorithms();

describe('numberAlgorithms', () => {

    describe('isPrime algorithm', () => {

      it('isPrime(10): should return false', () => {

        const result = numberAlgorithmFnc.isPrime(10);

        expect(result).to.be.an('boolean');
        expect(result).to.be.false;
      });

      it('isPrime(7): should return true', () => {

        const result = numberAlgorithmFnc.isPrime(7);

        expect(result).to.be.an('boolean');
        expect(result).to.be.true;
      });

      it('isPrime(-100): should return false', () => {

        const result = numberAlgorithmFnc.isPrime(-100);

        expect(result).to.be.an('boolean');
        expect(result).to.be.false;
      });

      it('isPrime("hi"): should return false', () => {

        const result = numberAlgorithmFnc.isPrime("hi");

        expect(result).to.be.an('boolean');
        expect(result).to.be.false;
      });
    });

    describe('greatestCommonDivisor algorithm', () => {

      it('greatestCommonDivisor(104, 84): should return 4', () => {

        const result = numberAlgorithmFnc.greatestCommonDivisor(104, 84);

        expect(result).to.be.an('number');
        expect(result).to.equal(4);
      });

      it('greatestCommonDivisor("bad", "input"), bad input: should return 0', () => {

        const result = numberAlgorithmFnc.greatestCommonDivisor("bad", "input");

        expect(result).to.be.an('number');
        expect(result).to.equal(0);
      });
    });

    describe('lowestCommonMultiplier algorithm', () => {

      it('lowestCommonMultiplier(104, 84): should return 2184', () => {

        const result = numberAlgorithmFnc.lowestCommonMultiplier(104, 84);

        expect(result).to.be.an('number');
        expect(result).to.equal(2184);
      });

      it('lowestCommonMultiplier("bad", "input"): should return 0', () => {

        const result = numberAlgorithmFnc.lowestCommonMultiplier("bad", "input");

        expect(result).to.be.an('number');
        expect(result).to.equal(0);
      });
    });

});
