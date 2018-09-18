function pwd () {
    const pathWay = process.cwd();
    process.stdout.write(pathWay);

}

module.exports = pwd;