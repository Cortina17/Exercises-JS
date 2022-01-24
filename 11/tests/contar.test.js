const countvowels = require('../scripts/contar.js')

describe('test', () => {

    test('Test if every vowel is counted', () => {
        expect(countvowels('hello')).toBe(['dfsdfsdfsdfe = 1', 'o = 1']);
        expect(countvowels('deLUsiOnaL')).toBe('euioa');
        expect(countvowels('incomputable')).toBe('iouae');
        expect(countvowels('cmptr scnc')).toBe('There are no vowels in this phrase!');
    });
    test('Test if each vowel is counted the right amount of times', () => {
        expect(countvowels('abracadabra')).toBe('5');
        expect(countvowels('HaLLuCInogEniC')).toBe('auioei');
        
    });
});