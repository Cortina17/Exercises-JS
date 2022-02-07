const letter = require('../scripts/testGenerator.js')

describe('test', () => {

    test('Test if console is available', () => {
        expect(letter()).toBe('Hi');
    })
})