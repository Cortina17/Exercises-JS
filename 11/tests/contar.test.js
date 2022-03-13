const countVowels = require('../scripts/contar.js')

describe('test', () => {
    test('Test if every vowel is counted', () => {
        expect(countVowels('hello')).arrayContaining([0,1,0,1,0]);
        // expect(countVowels('cmptr scnc')).toBe('There are no vowels in this phrase!');
    });
});