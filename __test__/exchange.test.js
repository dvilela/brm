const exchange = require('../exchange');

describe('exchange', () => {
    it('should make the programs at position 10 and 11 swap places', () => {
        expect(exchange('abcdefghijklmnop', { pos1: 10, pos2: 11 })).toBe('abcdefghijlkmnop');
    });

    it('should make the programs at position 0 and 1 swap places', () => {
        expect(exchange('abcdefghijklmnop', { pos1: 0, pos2: 1 })).toBe('bacdefghijklmnop');
    });

    it('should make the programs at position 14 and 15 swap places', () => {
        expect(exchange('abcdefghijklmnop', { pos1: 14, pos2: 15 })).toBe('abcdefghijklmnpo');
    });

    it('should make the programs at position 0 and 15 swap places', () => {
        expect(exchange('abcdefghijklmnop', { pos1: 0, pos2: 15 })).toBe('pbcdefghijklmnoa');
    });

    it('should make the programs at position 10 and 15 swap places', () => {
        expect(exchange('abcdefghijklmnop', { pos1: 10, pos2: 15 })).toBe('abcdefghijplmnok');
    });

    it('should make the programs at position 13 and 9 swap places', () => {
        expect(exchange('abcdefghijklmnop', { pos1: 13, pos2: 9 })).toBe('abcdefghinklmjop');
    });
});