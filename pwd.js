function pwd () {
    const pathWay = process.cwd();
    process.stdout.write(pathWay);
    process.stdout.write("\nprompt > ");
}

module.exports = pwd;