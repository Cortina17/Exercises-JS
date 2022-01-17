const compare = require('../scripts/compare')

describe('test', () => {

    test('Test if a number is the greatest between among other two', () => {
        expect(compare(9,7,4)).toBe(9);
        expect(compare(4,7,5)).toBe(7);
        expect(compare(1,2,8)).toBe(8);
    });

    test('Test if the numbers are the same', () => {
        expect(compare(7,7,7)).toBe(7)
    })
})