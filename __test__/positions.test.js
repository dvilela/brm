const positions = require('../positions');

describe('positions', () => {
    it('should parse position 1 and 2 from input', () => {
        expect(positions('x1/2')).toEqual({ pos1: 1, pos2: 2 });
    });
});