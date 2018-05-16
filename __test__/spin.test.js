const spin = require('../spin');

describe('spin', () => {
    it('should put last ten members first', () => {
        expect(spin('abcdefghijklmnop', '10')).toBe('ghijklmnopabcdef');
    });

    it('should put last three members first', () => {
        expect(spin('abcde', '3')).toBe('cdeab');
    });

    it('should put last two members first', () => {
        expect(spin('abcde', '2')).toBe('deabc');
    });

    it('should put last member first', () => {
        expect(spin('abcde', '1')).toBe('eabcd');
    });
});