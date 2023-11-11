const path = require("path");

module.exports = {
    entry: "./src/handler.js",
    output: {
        filename: "handler.js",
        path: path.resolve(__dirname, "dist")
    }
};