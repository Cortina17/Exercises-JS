const countas = require('../scripts/countas.js');

describe('test', () => {

    test('Test designed to count how many times the letter "a" appears in a phrase', () => {
        expect(countas('I live near the Atlantic Ocean.')).toBe(4);
        expect(countas('I hAvE a FAt BLack CaT!')).toBe(5);
        expect(countas('Hello my friend.')).toBe(0);
    });
})
