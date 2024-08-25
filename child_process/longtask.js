function longComputation() {
    let sum = 0;

    for (let i = 0; i < 10e8; i++) {
        sum += i;
    }
    return sum;
}

process.on("message", (message) => {
    if (message === "start") {
        console.log(`process id: {process.pid} created`);
        const sum = longComputation();
        process.send(sum);
        // process.kill(process.pid);
    }
});
