const fs = require('fs')

fs.readFile('./text.txt', 'utf8', (err, file) => {
    console.log(err, file);
})