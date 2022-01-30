const countvowels = require('../scripts/contar.js')

describe('test', () => {

    test('Test if every vowel is counted', () => {
        // expect(countvowels('hello')).toBe(['a == 0', 'e == 1', 'i == 0', 'o == 1', 'u == 0']);
        expect(countvowels('deLUsiOnaL')).toBe({'a':1, 'e':1, 'i':1, 'o':1, 'u':1});
        expect(countvowels('deLUsiOnaL')).toBe(['a = 1', 'e = 1', 'i = 1', 'o = 1', 'u = 1']);
        expect(countvowels('cmptr scnc')).toBe('There are no vowels in this phrase!');
    });
    test('Test if each vowel is counted the right amount of times', () => {
        expect(countvowels('abracadabra')).toBe(['a = 5', 'e = 0', 'i = 0', 'o = 0', 'u = 0']);
        expect(countvowels('HaLLuCInogEniC')).toBe(['a = 1', 'e = 1', 'i = 2', 'o = 1', 'u = 1']);
    });
});