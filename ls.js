const fs = require("fs");

function ls () {
    fs.readdir('./', 'utf8', (err, files) => {
        if (err){
            throw err;
        } else {
            const printFilePaths = files.join('\n');
            process.stdout.write(printFilePaths);
            process.stdout.write("\nprompt > ");
        }
    })
}

module.exports = ls;