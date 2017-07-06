const eslint = require("eslint");

const cliEngine = new eslint.CLIEngine({
  cwd: ".",
});

const config = cliEngine.getConfigForFile("index.js");

console.log(config);
