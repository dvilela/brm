function positions(input) {
    const slashIndex = input.indexOf('/');
    const pos1 = +input.substring(1, slashIndex);
    const pos2 = +input.substring(slashIndex + 1, input.length);
    return {
        pos1,
        pos2
    };
}

module.exports = positions;