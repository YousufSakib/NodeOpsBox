//for large file it is efficient to use stream

const fs = require('fs');

const rs = fs.createReadStream("../files/lorem.txt", {encoding: 'utf8'});

const ws = fs.createWriteStream("../files/new-lorem.txt");


// rs.on('data', (dataChunk) => {
//     ws.write(dataChunk + '\nSakib');
// })


//more efficient using pipe

rs.pipe(ws);