import numberAlgorithm from '../script/algorithms/numberAlgorithm.js';

const expect = require('chai').expect;
const numberAlgorithmFnc = numberAlgorithm();

describe('numberAlgorithm', () => {

    describe('isPrime algorithm', () => {

      it('isPrime(10): false', () => {

        const result = numberAlgorithmFnc.isPrime(10);

        expect(result).to.be.an('boolean');
        expect(result).to.be.false;
      });

      it('isPrime(7): true', () => {

        const result = numberAlgorithmFnc.isPrime(7);

        expect(result).to.be.an('boolean');
        expect(result).to.be.true;
      });

      it('isPrime(-100): false', () => {

        const result = numberAlgorithmFnc.isPrime(-100);

        expect(result).to.be.an('boolean');
        expect(result).to.be.false;
      });

      it('isPrime("hi"): false', () => {

        const result = numberAlgorithmFnc.isPrime("hi");

        expect(result).to.be.an('boolean');
        expect(result).to.be.false;
      });
    });

    describe('greatestCommonDivisor algorithm', () => {

      it('greatestCommonDivisor(104, 84): false', () => {

        const result = numberAlgorithmFnc.greatestCommonDivisor(104, 84);

        expect(result).to.be.an('number');
        expect(result).to.equal(4);
      });

      it('greatestCommonDivisor(84, 104): false', () => {

        const result = numberAlgorithmFnc.greatestCommonDivisor(84, 104);

        expect(result).to.be.an('number');
        expect(result).to.equal(4);
      });

      it('greatestCommonDivisor("bad", "input"): false', () => {

        const result = numberAlgorithmFnc.greatestCommonDivisor("bad", "input");

        expect(result).to.be.an('number');
        expect(result).to.equal(0);
      });

    });

    describe('lowestCommonMultiplier algorithm', () => {

      it('lowestCommonMultiplier(104, 84): 2184', () => {

        const result = numberAlgorithmFnc.lowestCommonMultiplier(104, 84);

        expect(result).to.be.an('number');
        expect(result).to.equal(2184);
      });

      it('lowestCommonMultiplier("bad", "input"): false', () => {

        const result = numberAlgorithmFnc.lowestCommonMultiplier("bad", "input");

        expect(result).to.be.an('number');
        expect(result).to.equal(0);
      });

    });

});
