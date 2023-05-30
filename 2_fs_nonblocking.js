const fs = require('fs');

const first = fs.readFileSync('./content/first.txt', 'utf-8');
const second = fs.readFileSync('./content/second.txt', 'utf-8');
fs.writeFileSync('./content/fs_result.txt', `Here is the result for ${first}, ${second}`);
console.log(first, second)