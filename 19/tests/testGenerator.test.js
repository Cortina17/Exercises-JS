const letter = require('../scripts/testGenerator.js')

describe('test', () => {

    test('Test the returned letter based on the number introduced', () => {
        expect(letter(0)).toBe('Your letter will be \"T\"');
        expect(letter(1)).toBe('Your letter will be \"R\"');
        expect(letter(2)).toBe('Your letter will be \"W\"');
        expect(letter(3)).toBe('Your letter will be \"A\"');
        expect(letter(4)).toBe('Your letter will be \"G\"');
        expect(letter(5)).toBe('Your letter will be \"M\"');
        expect(letter(6)).toBe('Your letter will be \"Y\"');
        expect(letter(7)).toBe('Your letter will be \"F\"');
        expect(letter(8)).toBe('Your letter will be \"P\"');
        expect(letter(9)).toBe('Your letter will be \"D\"');
        expect(letter(10)).toBe('Your letter will be \"X\"');
        expect(letter(11)).toBe('Your letter will be \"B\"');
        expect(letter(12)).toBe('Your letter will be \"N\"');
        expect(letter(13)).toBe('Your letter will be \"J\"');
        expect(letter(14)).toBe('Your letter will be \"Z\"');
        expect(letter(15)).toBe('Your letter will be \"S\"');
        expect(letter(16)).toBe('Your letter will be \"Q\"');
        expect(letter(17)).toBe('Your letter will be \"V\"');
        expect(letter(18)).toBe('Your letter will be \"H\"');
        expect(letter(19)).toBe('Your letter will be \"L\"');
        expect(letter(20)).toBe('Your letter will be \"C\"');
        expect(letter(21)).toBe('Your letter will be \"K\"');
        expect(letter(22)).toBe('Your letter will be \"E\"');
    });
});