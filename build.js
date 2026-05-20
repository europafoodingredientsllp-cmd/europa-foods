const fs = require('fs');
const path = require('path');

const source = path.join(__dirname, 'home.html');
const dest = path.join(__dirname, 'index.html');

fs.copyFileSync(source, dest);
console.log('Built index.html from home.html');
