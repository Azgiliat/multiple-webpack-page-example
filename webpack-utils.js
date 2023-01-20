const HtmlWebpackPlugin = require("html-webpack-plugin");
const fs = require("fs");
const path = require("path");

const pages = fs.readdirSync(path.resolve(__dirname, 'src/pages'), { withFileTypes: true })
    .filter((item) => item.isDirectory())
    .map((item) => item.name);
const generateHtmlPlugin = (title) => {
    return new HtmlWebpackPlugin({
        filename: `${title}.html`,
        template: `./index.html`,
        chunks: [title]
    });
}

const htmlPluginsForAllPages = pages.map(generateHtmlPlugin)
const entriesForAllPages = pages.reduce((result, pageName) => {
    result[pageName] = path.resolve(__dirname, `src/pages/${pageName}`)

    return result
}, {})


exports.htmlPluginsForAllPages = htmlPluginsForAllPages
exports.entriesForAllPages = entriesForAllPages
