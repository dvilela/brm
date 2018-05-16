function spin(programs, moves) {
    return programs.substring(programs.length - moves, programs.length) + programs.substring(0, programs.length - moves);
}

module.exports = spin;