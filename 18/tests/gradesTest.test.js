const grades = require('../scripts/grades.js')

describe('test', () => {

    test('Test if 0-3 shows too poor', () => {
        expect(grades(0)).toBe('Too poor');
        expect(grades(1)).toBe('Too poor');
        expect(grades(2)).toBe('Too poor');
        expect(grades(3)).toBe('Too poor');
    });

    test('Test if 3-5 shows insuficient', () => {
        expect(grades(3)).toBe('Insuficient');
        expect(grades(4)).toBe('Insuficient');
        expect(grades(5)).toBe('Insuficient');
    });

    test('Test if 6-7 shows good', () => {
        expect(grades(6)).toBe('Suficient');
        expect(grades(7)).toBe('Suficient');
    });

    test('Test if 7-9 shows remarkable', () =>{
        expect(grades(7)).toBe('Remarkable');
        expect(grades(8)).toBe('Remarkable');
        expect(grades(9)).toBe('Remarkable');
    });

    test('Test if 9-10 shows outstanding', () => {
        expect(grades(9)).toBe('Outstanding');
        expect(grades(10)).toBe('Outstanding');
    });
});