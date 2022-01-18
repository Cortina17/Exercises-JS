const checkif = require('../scripts/checkif');

describe('test', () => {

    test('Test if a number is divisible by two', () => {
        expect(checkif(12)).toBe('This number is even!');
        expect(checkif(7)).toBe('This number is odd!');
    });
});