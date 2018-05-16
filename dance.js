const spin = require('./spin');
const exchange = require('./exchange');
const partner = require('./partner');
const positions = require('./positions');

function dance(programs, input) {
    if (input.startsWith('s')) {
        return spin(programs, input.substring(1, input.length));
    }

    if (input.startsWith('x')) {
        const pos = positions(input);
        return exchange(programs, pos);
    }

    if (input.startsWith('p')) {
        return partner(programs, input);
    }
}

module.exports = dance;
