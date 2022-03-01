const countVowels = require('../scripts/contar.js')

describe('test', () => {

    test('Test if every vowel is counted', () => {
        expect(countVowels('hello')).toBe([0,1,0,1,0]);
        expect(countVowels('deLUsiOnaL')).toBe([1,1,1,1,1]);
        // expect(countVowels('cmptr scnc')).toBe('There are no vowels in this phrase!');
    });
    test('Test if each vowel is counted the right amount of times', () => {
        expect(countVowels('abracadabra')).toBe(['a = 5', 'e = 0', 'i = 0', 'o = 0', 'u = 0']);
        expect(countVowels('HaLLuCInogEniC')).toBe(['a = 1', 'e = 1', 'i = 2', 'o = 1', 'u = 1']);
    });
});