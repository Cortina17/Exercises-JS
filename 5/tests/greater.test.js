const greater = require('../scripts/greater')

describe('test', () => {

    test('Test if a number is greater than other', () => {
        expect(greater(5,3)).toBe(5);
        expect(greater(5,8)).toBe(8);
    });

    test('Test if the numbers are the same number', () => {
        expect(greater(4,4)).toBe('They are equals');
    })
})