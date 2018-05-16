const partner = require('../partner');

describe('partner', () => {
    it('should make the programs named B and D swap places when input is pb/d', () => {
        expect(partner('abcde', 'pb/d')).toBe('adcbe');
    });

    it('should make the programs named A and P swap places when input is pa/p', () => {
        expect(partner('abcdefghijklmnop', 'pa/p')).toBe('pbcdefghijklmnoa');
    });
});