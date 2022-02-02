const prime = require('../scripts/prime.js');

describe('test', () => {

    test('Test if a number is prime', () => {
        expect(prime(-5)).toBe('is not a prime number');
        expect(prime(0)).toBe('is not a prime number');
        expect(prime(1)).toBe('is not a prime number');
        expect(prime(2)).toBe('is a prime number');
        expect(prime(3)).toBe('is a prime number');
        expect(prime(4)).toBe('is not a prime number');
        expect(prime(5)).toBe('is a prime number');
        expect(prime(6)).toBe('is not a prime number');
        expect(prime(7)).toBe('is a prime number');
        expect(prime(8)).toBe('is not a prime number');
        expect(prime(9)).toBe('is not a prime number');
        expect(prime(11)).toBe('is a prime number');
    });
});