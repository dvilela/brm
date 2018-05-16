function exchange(programs, { pos1, pos2 }) {
    let p1 = pos1;
    let p2 = pos2;

    if (p1 > p2) {
        p2 = pos1;
        p1 = pos2;
    }

    return programs.substring(0, +p1)
        .concat(programs[+p2])
        .concat(programs.substring(p1 + 1, p2))
        .concat(programs[+p1])
        .concat(programs.substring(p2 + 1, programs.length));
}

module.exports = exchange;