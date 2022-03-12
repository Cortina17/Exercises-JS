const commonDivs = require('../scripts/common.js')

describe('Test of the exercise number 15', () => {
    test('if common divisors of two number are returned', () => {
        expect(commonDivs(18,27)).toEqual([1,3,9]);
        expect(commonDivs(27,54)).toEqual([1,3,9,27]);
        expect(commonDivs(46,54)).toEqual([1,2]);
    });
});
