const divisibleBy = require("../scripts/divisible.js");

describe('Divisible', () => {
    test('if number is divisible by 2', () => {
        expect(divisibleBy(2)).toBe("Divisible by 2");
    });
    test('if number is divisible by 3', () => {
        expect(divisibleBy(3)).toBe("Divisible by 3");
    });
    test('if number is divisible by 5', () => {
        expect(divisibleBy(5)).toBe("Divisible by 5");
    });
    test('if number is divisible by 7', () => {
        expect(divisibleBy(7)).toBe("Divisible by 7");
    });
    
    test('if number is not divisible by 2, 3, 5 or 7', () => {
        expect(divisibleBy(11)).toBe("Not divisible by 2, 3, 5 or 7");
    })
});