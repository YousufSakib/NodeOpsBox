//The spawn methode does not use the Buffer
// It uses the stream. So that all the standard output that is comming inside the terminal is a stream.

const { spawn } = require("child_process");

const child = spawn("find", ["/"]);

child.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`);
});

child.stderr.on("data", (data) => {
    console.log(`stderr: ${data}`);
});

child.on("error", (error) => {
    console.log(`error: ${error.message}`);
});

child.on("exit", (code, signal) => {
    if (code) {
        console.log(`Process exit with code: ${code}`);
    }
    if (signal) {
        console.log(`Process killed with signal: ${signal}`);
    }
    console.log("Done");
});
