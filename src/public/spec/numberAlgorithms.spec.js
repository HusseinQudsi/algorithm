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

});
