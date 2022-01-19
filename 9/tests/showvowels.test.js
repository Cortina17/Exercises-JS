const showVowels = require("../scripts/showvowels.js");

describe('test', () => {

    test('Tests if the function returns the vowels used in a given phrase', () => {
        expect(showVowels('Game')).toStrictEqual(['a','e']);
        expect(showVowels('Scissors')).toStrictEqual(['i','o']);
        expect(showVowels('YOU')).toStrictEqual(['O','U']);
        expect(showVowels('You played like a real champion!')).toStrictEqual(['o','u','a','e','i','e','a','e','a','a','i','o']);
        expect(showVowels('Thr r n vwls n ths phrs')).toStrictEqual('There are no vowels in this phrase!');
    });
});