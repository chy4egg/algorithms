const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin
});

let lines = [];
rl.on("line", line => {
  lines.push(line);
}).on("close", () => {
  const table = new Set();
  for (let i = 1; i < lines.length; i++) {
    if (!table.has(lines[i])) {
      table.add(lines[i]);
    }
  }
  Array.from(table).forEach((el) => process.stdout.write(`${el}\n`));
});
