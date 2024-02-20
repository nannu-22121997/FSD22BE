const { writeFileSync } = require("fs");

for (let i = 0; i <= 1000; i++) {
    writeFileSync("./content.txt", `The content in line: ${i} is => ${i}\n`, { flag: "a", });
}