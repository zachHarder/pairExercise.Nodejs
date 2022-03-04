process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  if (cmd === "pwd") {
    pwd();
    // process.stdout.write(process.cwd());
  } else if (cmd === "ls") {
    ls();
  } else if (cmd == "cat") {
    cat();
  } else {
    process.stdout.write("You type: " + cmd);
    process.stdout.write("\nprompt > ");
  }
});

const pwd = require("./pwd.js");
const ls = require("./ls.js");
const cat = require("./cat.js");
