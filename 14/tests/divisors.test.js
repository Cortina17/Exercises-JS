const divisors = require("../scripts/test_divisors.js")

describe('test exercise fourteen', () => {
    test('Test if all the divisors of a given number are returned', () => {
        expect(divisors(4)).toEqual([1, 2]);
        expect(divisors(8)).toEqual([1, 2, 4]);
        expect(divisors(16)).toEqual([1, 2, 4, 8]);
        expect(divisors(9)).toEqual([1, 3]);
        expect(divisors(18)).toEqual([1, 2,3,6,9]);
    });

    test('if the number is prime', () => {
        expect(divisors(5)).toBe('5 is a prime number');
        expect(divisors(7)).toBe('7 is a prime number');
        expect(divisors(11)).toBe('11 is a prime number');
        expect(divisors(13)).toBe('13 is a prime number');
    });
});
