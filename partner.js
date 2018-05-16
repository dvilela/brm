const exchange = require('./exchange');
const positions = require('./positions');

function partner(programs, input) {
    const program1 = input.substring(1, 2);
    const program2 = input.substring(3, 4);

    const exchangeInput = positions('x' + programs.indexOf(program1) + '/' + programs.indexOf(program2));
    return exchange(programs, exchangeInput);
}

module.exports = partner;