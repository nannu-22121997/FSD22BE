const { readFile, writeFile } = require("fs");

console.log("Start...");

readFile("./1-content.txt", "utf-8", (err, res) => {
    if (err) {
        console.log(err);
        return;
    }
    const firstFile = res;
    readFile("./2-content.txt", "utf-8", (err, res) => {
        if (err) {
            console.log(err);
            return;
        }
    });
    const secondFile = res;
    writeFile("./3-write-content.txt", `The content in fileOne: ${firstFile} \n The content in fileTwo: ${secondFile}\n`, (err, res) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("File written sucessfully...");
    });
});

console.log("End..");