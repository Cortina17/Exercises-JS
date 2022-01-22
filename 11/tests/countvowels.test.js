const hi = require("../scripts/countvowels")

describe('test', () => {

    test('Test if every vowel is counted', () => {
        expect(cuntvowels('deLUsiOnaL')).toBe('euioa');
        expect(cuntvowels('incomputable')).toBe('iouae');
        expect(cuntvowels('cmptr scnc')).toBe('There are no vowels in this phrase!');
    });
    test('Test if each vowel is counted the right amount of times', () => {
        expect(cuntvowels('abracadabra')).toBe('5');
        expect(cuntvowels('HaLLuCInogEniC')).toBe('auioei');
        
    });
});