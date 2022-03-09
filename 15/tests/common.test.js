const commonDivs = require('../scripts/common.js')

describe('Test of the exercise number 15', () => {
    test('if common divisors of two number are returned', () => {
        expect(commonDivs([18,27])).tobe([1,3,9]);
    });
});