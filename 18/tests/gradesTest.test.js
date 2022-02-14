const grades = require('../scripts/grades.js')

describe('test', () => {

    test('Test if the number is between 0 and 10', () => {
        expect(grades(-10)).toBe('Enter a number between 0 and 10');
        expect(grades(17)).toBe('Enter a number between 0 and 10');
    });

    test('Test if 0-3 shows too poor', () => {
        expect(grades(0)).toBe('Too poor');
        expect(grades(1)).toBe('Too poor');
        expect(grades(2)).toBe('Too poor');
    });

    test('Test if 3-5 shows insuficient', () => {
        expect(grades(3)).toBe('Insuficient');
        expect(grades(4)).toBe('Insuficient');
    });

    test('Test if 6-7 shows suficient', () => {
        expect(grades(5)).toBe('Suficient');
        expect(grades(6)).toBe('Suficient');
    });

    test('Test if 7-9 shows remarkable', () =>{
        expect(grades(7)).toBe('Remarkable');
        expect(grades(8)).toBe('Remarkable');
    });

    test('Test if 9-10 shows outstanding', () => {
        expect(grades(9)).toBe('Outstanding');
        expect(grades(10)).toBe('Outstanding');
    });
});