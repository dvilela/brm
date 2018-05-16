const path = require('path');
const input = require('./input');
const dance = require('./dance');

function doDance(programs) {
    let _programs = programs;

    const inputs = input.readFile(path.resolve(__dirname, 'assets', 'input.txt'));

    const errors = input.validate(inputs, _programs);
    if (errors.length > 0) {
        console.error(errors);
        process.exit(1);
    }

    inputs.forEach(input => {
        _programs = dance(_programs, input);
    });

    return _programs;
}

console.info(doDance('abcdefghijklmnop'));

// exporting for tests
module.exports = {
    doDance
};