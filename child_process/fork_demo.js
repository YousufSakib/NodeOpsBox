const express = require("express");
const { fork } = require("child_process");

const app = express();

app.get("/one", (req, res) => {
    const sum = longComputation();
    res.send({ sum: sum });
});

app.get("/two", async (req, res) => {
    const sum = await longComputePromise();
    res.send({ sum: sum });
});

app.get("/three", (req, res) => {
    const child = fork("./longtask.js");
    child.send("start");
    child.on("message", (message) => {
        res.send({ sum: message });
        child.kill();
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
});

app.listen(3000, () => console.log(`Server on port 3000...`));

function longComputation() {
    let sum = 0;

    for (let i = 0; i < 10e8; i++) {
        sum += i;
    }
    return sum;
}

function longComputePromise() {
    return new Promise((resolve, reject) => {
        let sum = 0;

        for (let i = 0; i < 10e8; i++) {
            sum += i;
        }
        resolve(sum);
    });
}
