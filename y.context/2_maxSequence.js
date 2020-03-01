const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin
});

let lines = [];
let current = 0;
let max = 0;

rl.on("line", line => {
  lines.push(line);
}).on("close", () => {

  for (let i = 0; i < lines.length; i++) {

    if (lines[i] === 1) {
      current++;
      // if its the last element
      if (lines[i + 1] === undefined) {
        if (current > max) {
          current = max;
        }
      }
    } else {
      if (current > max) {
        current = max;
        current = 0;
      }
    }
  }

  process.stdout.write(max.toString());
});
