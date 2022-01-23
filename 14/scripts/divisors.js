const divisors = require("../scripts/divisors.js")


describe('test', () => {

    test('Test if all divisors of a given number are returned', () => {
        expect(divisors(4)).toBe(2,2);
        expect(divisors(8)).toBe(2,2,2);
        expect(divisors(9)).toBe(3,3);
        expect(divisors(20)).toBe(2,2,5);
    });
});