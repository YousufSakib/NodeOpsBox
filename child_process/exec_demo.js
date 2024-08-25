//Not for a command which has a huge output
//It Buffers all output

const { exec } = require("child_process");

exec("pwd", (error, stdout, stderr) => {
    //error: command has missing agrs or invalid command
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    //stderr: error after a command has executed
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});
