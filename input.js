const fs = require('fs');

function readFile(path) {
    return fs.readFileSync(path).toString().split(',');
}

function validate(inputs, programs) {
    const errors = [];
    inputs.forEach(input => {
        const slashIndex = input.indexOf('/');
        const movementName = input[0];
        switch (movementName) {
            case 's':
                break;
            case 'x':
                const pos1 = input.substring(1, slashIndex);
                const pos2 = input.substring(slashIndex + 1, input.length);

                const validateX = (pos) => {
                    if (isNaN(pos) || (+pos > programs.length || +pos < 0)) {
                        errors.push({
                            message: 'invalid position ' + pos,
                            input
                        });
                    }
                };
                validateX(pos1);
                validateX(pos2);
                break;
            case 'p':
                const program1 = input.substring(1, slashIndex);
                const program2 = input.substring(slashIndex + 1, input.length);

                const validateP = (program) => {
                    if (programs.indexOf(program) === -1) {
                        errors.push({
                            message: 'there are no program ' + program,
                            input
                        });
                    }
                };

                validateP(program1);
                validateP(program2);
        }
    });
    
    return errors;
}

module.exports = {
    readFile,
    validate
};