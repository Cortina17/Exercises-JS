const isOver18 = require('../scripts/testOverAge.js')
describe('test', () => {

    test('Test if age is over 18 yo', () => {

        expect(isOver18(5)).toBe(false);
        expect(isOver18(17)).toBe(false);
        expect(isOver18(18)).toBe(true);
        expect(isOver18(69)).toBe(true)
    });
});