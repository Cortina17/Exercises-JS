const divisors = require("../scripts/divisors.js")

describe('test', () => {

    test('Test if all divisors of a given number are returned', () => {
        expect(divisors(4)).toBe(1,2,2);
        expect(divisors(8)).toBe(1,2,2,2);
        expect(divisors(9)).toBe(1,3,3);
        expect(divisors(20)).toBe(1,2,2,5);
    });
});
