const fs = require('fs');

fs.readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    console.log(result)
    fs.readFile('./content/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        console.log(second);

        fs.writeFile('./content/fs_result.txt', `Here is the data from async ${first}, ${second}`, (err, result) => {
            if (err) {
                console.log(err)
                return;
            }
            console.log(result)
        })

    })

})