// Output a prompt
process.stdout.write("prompt > ");

const pwd = require("./pwd.js");

// The stdin 'data' event fires after a user types in a line
process.stdin.on("data", data => {
  let cmd = data.toString().trim();

  switch (cmd) {
    case "pwd":
      pwd();
      break;

    case "ls":
      break;
      
    default:
      process.stdout.write("Not a valid command");
  }
  process.stdout.write("\nprompt > ");
});
