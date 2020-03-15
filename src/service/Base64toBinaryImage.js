const base64Img = require("base64-img");
const { FilePath } = require('../.env');
const { fs } = require("file-system");

const ReadImage = path => fs.readFileSync(path).toString();

module.exports = Base64toBinaryImage = (base64string, fileName = Date.now) =>
    ReadImage(base64Img.imgSync(base64string, FilePath, fileName)) || "Couldn't Read the file";