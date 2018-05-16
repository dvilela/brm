const dance = require('../dance');

describe('dance', () => {
    it('should spin programs when input is s3', () => {
        expect(dance('abcde', 's3')).toBe('cdeab');
    });

    it('should spin programs when input is s2', () => {
        expect(dance('abcde', 's2')).toBe('deabc');
    });

    it('should exchange programs when input is x10/11', () => {
        expect(dance('abcdefghijklmnop', 'x10/11')).toBe('abcdefghijlkmnop');
    });

    it('should make the programs named A and B swap places when input is pa/b', () => {
        expect(dance('abcde', 'pa/b')).toBe('bacde');
    });
});