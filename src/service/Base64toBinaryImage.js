const Base64Img = require("base64-img");
const { FilePath } = require('../.env');
const { fs } = require("file-system");

const ReadImage = path => fs.readFileSync(path).toString();

module.exports = (base64string, fileName = Date.now) =>
    ReadImage(
        Base64Img.imgSync(
            base64string,
            FilePath,
            fileName
        )
    ) || "Couldn't Read the file";