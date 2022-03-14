const countVowels = require('../scripts/contar.js')

describe('test', () => {
    test('Test if every vowel is counted', () => {
        expect(countVowels('aeiou')).toEqual([1,1,1,1,1,0]);
        expect(countVowels('hello')).toEqual([0,1,0,1,0,3]);
        expect(countVowels('DElUsionALL')).toEqual([1,1,1,1,1,6]);
        expect(countVowels('aBRacaDAbRa')).toEqual([5,0,0,0,0,6]);
    });
    test('Test if every vowel is counted the right amount of times', () => {
        expect(countVowels('If you are seeing this, hire me')).toEqual([1,5,4,1,1,12]);
        expect(countVowels('Im a junior who does testing')).toEqual([1,2,3,3,1,13]);
    });
});