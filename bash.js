const pwd = require("./pwd.js");
const ls = require("./ls.js");

// Output a prompt
process.stdout.write("prompt > ");

// The stdin 'data' event fires after a user types in a line
process.stdin.on("data", data => {
  let cmd = data.toString().trim();

  switch (cmd) {
    case "pwd":
      pwd();
      break;

    case "ls":
      const rightNow = new Date;
      ls();
      console.log(new Date - rightNow);
      break;

    default:
      process.stdout.write("Not a valid command");
      process.stdout.write("\nprompt > ");
  }
});
