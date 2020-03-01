const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin
});

let lines = [];
rl.on("line", line => {
  lines.push(line);
}).on("close", () => {
  let current = 0;
  let max = 0;
  for (let i = 1; i < lines.length; i++) {
    if (lines[i] > 0) {
      current++;
      // last element check
      if (lines[i + 1] === undefined) {
        if (current > max) {
          max = current;
          current = 0;
        }
      }
    } else {
      if (current > max) {
        max = current;
        current = 0;
      }
    }
  }
  process.stdout.write(max.toString());
});
