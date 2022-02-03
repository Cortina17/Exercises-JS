const prime = require('../scripts/prime.js');

describe('test', () => {

    test('Test if a number is prime', () => {
        expect(prime(-5)).toBe('You need to write a number greater than 1');
        expect(prime(0)).toBe('You need to write a number greater than 1');
        expect(prime(1)).toBe('1 is not prime nor composite');
        expect(prime(2)).toBe('is a prime number');
        expect(prime(3)).toBe('is a prime number');
        expect(prime(4)).toBe('is not a prime number');
        expect(prime(5)).toBe('is a prime number');
        expect(prime(6)).toBe('is not a prime number');
        expect(prime(7)).toBe('is a prime number');
        expect(prime(8)).toBe('is not a prime number');
        expect(prime(9)).toBe('is not a prime number');
        expect(prime(11)).toBe('is a prime number');
        expect(prime(17)).toBe('is a prime number');
        expect(prime(37)).toBe('is a prime number');
        expect(prime(42)).toBe('is not a prime number');
    });
});