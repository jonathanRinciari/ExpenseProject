// entry point src/app.js
// output / index.html

const path = require('path');


module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.join(__dirname, 'public'),
        filename: "bundle.js"
    }
}