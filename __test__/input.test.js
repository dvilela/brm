const input = require('../input');
const path = require('path');

const filePath = path.resolve(__dirname, 'input.txt');

describe('input', () => {
    const inputs = ['x3/15', 'pc/l', 'x13/9', 'pe/f', 'x3/14', 's2', 'x8/10', 's15', 'x4/0', 's4'];

    it('should read inputs from file', () => {
        expect(input.readFile(filePath)).toEqual(inputs);
    });

    it('should validate inputs against programs', () => {
        expect(input.validate(inputs, 'abcdefghijklmnop')).toEqual([]);
    });
    
    it('should not accept named programs that does not exists', () => {
        expect(input.validate(['pc/l'], 'abde')).toEqual([{"input": "pc/l", "message": "there are no program c"}, {"input": "pc/l", "message": "there are no program l"}]);
    });
    
    it('should not accept invalid positions', () => {
        expect(input.validate(['x10/20'], 'abde')).toEqual([{"input": "x10/20", "message": "invalid position 10"}, {"input": "x10/20", "message": "invalid position 20"}]);
    });
});