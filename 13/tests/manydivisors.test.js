const howManyDivisors = require('../scripts/manydivisors.js');

describe('test how many divisors', () => {

    test('if number is divisible by 2', () => {
        expect(howManyDivisors(2)).toBe("Divisible by 2.")
    });
    test('if number is divisible by 2 and 3', () => {
        expect(howManyDivisors(6)).toBe("Divisible by 2 and 3.")
    });

    test('if number is divisible by 2 and 5', () => {
        expect(howManyDivisors(10)).toBe("Divisible by 2 and 5.")
    });

    test('if number is divisible by 2 and 7', () => {
        expect(howManyDivisors(14)).toBe("Divisible by 2 and 7.")
    });

    test('if number is divisible by 3 and 5', () => {
        expect(howManyDivisors(15)).toBe("Divisible by 3 and 5.")
    });

    test('if number is divisible by 3 and 7', () => {
        expect(howManyDivisors(21)).toBe("Divisible by 3 and 7.")
    });

    test('if number is divisible by 5 and 7', () => {
        expect(howManyDivisors(35)).toBe("Divisible by 5 and 7.")
    });

    
    test('if number is divisible by 2, 3 and 5', () => {
        expect(howManyDivisors(30)).toBe("Divisible by 2, 3 and 5.")
    });

    test('if number is divisible by 2, 3 and 7', () => {
        expect(howManyDivisors(42)).toBe("Divisible by 2, 3 and 7.")
    });

    test('if number is divisible by 3, 5 and 7', () => {
        expect(howManyDivisors(105)).toBe("Divisible by 3, 5 and 7.")
    });


    test('if number is not divisible by 2, 3, 5 or 7', () => {
        expect(howManyDivisors(11)).toBe("Not divisible by 2, 3, 5 or 7.")
    });
    test('if number is not divisible by 2, 3, 5 or 7', () => {
        expect(howManyDivisors(13)).toBe("Not divisible by 2, 3, 5 or 7.")
    });

    test('if number is not divisible by 2, 3, 5 or 7', () => {
        expect(howManyDivisors(101)).toBe("Not divisible by 2, 3, 5 or 7.")
    });
});