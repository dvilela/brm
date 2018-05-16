const index = require('../index');

describe('index', () => {
    it('should dance assets/input.txt file and get the answer equal hmefajngplkidocb', () => {
        expect(index.doDance('abcdefghijklmnop')).toBe('hmefajngplkidocb');
    })
});