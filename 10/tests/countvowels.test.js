const countVowels = require("../scripts/countvowels.js")

describe('test', () => {

    test('Tests if the correct number of vowels is returned.', () => {
        expect(countVowels('Some')).toBe(2);
        expect(countVowels('Where over')).toBe(4);
        expect(countVowels('ThE RAInbow')).toBe(4);
        expect(countVowels('Thr s n rnbw.')).toBe('There are no vowels in this phrase!');
    });
});