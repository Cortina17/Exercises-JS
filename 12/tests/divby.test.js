const divby = require('../scripts/divby.js');

describe('test', () => {

    test('Test if function returns the first number by which a given number is divisible by', () => {
        expect(divby(4).toBe('x es divisble por 2'));
        expect(divby(8).toBe(2));
        expect(divby(3).toBe(3));
        expect(divby(9).toBe(3));
        expect(divby(35).toBe(5));
        expect(divby(7).toBe(7));
        expect(divby(49).toBe(7));
    })
})