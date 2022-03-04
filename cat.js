const cat = require("cat");

module.exports = function (cat, fileName) {
  process.stdout.write(cat(fileName));
  process.stdout.write("\nprompt > ");
};
