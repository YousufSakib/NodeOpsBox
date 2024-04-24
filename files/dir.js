const fs = require('fs');

//check for a file or a directory exists
if(!fs.existsSync('./new')) {
    fs.mkdir('./new', (err) => {
        if(err)throw err;
    
        console.log("Directory created");
    })
}


if(fs.existsSync('./new')) {
    fs.rmdir('./new', (err) => {
        if(err)throw err;
    
        console.log("Directory removed");
    })
}

//exit on uncaught errors
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
})