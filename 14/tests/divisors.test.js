const divisors = require("../scripts/test_divisors.js")

describe('test exercise fourteen', () => {
    test('Test if all the divisors of a given number are returned', () => {
        expect(divisors(4)).toEqual([2]);
        expect(divisors(8)).toEqual([2, 4]);
        expect(divisors(16)).toEqual([2, 4, 8]);
        expect(divisors(9)).toEqual([3]);
        expect(divisors(18)).toEqual([2,3,6,9]);
    });
});
