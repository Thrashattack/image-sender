import base64Img from `base64-img`;


export default class ImageDTO {    
    FilePath = `../tmp/`;

    constructor() {
        FileName = Date.now();
        _base64string = ``;
        _rawBinary = ``;
    }

    toImage = (base64string) => {
        let response = ``;
        base64Img.img(base64string, this.FilePath, this.FileName, (err, filepath) => {
            if(err) {
                console.log(err);
                response = err;
            } else response = filepath;
        });
        return response;
    }

    toBase64 = (binaryString, filepath) => {
        //TODO
    }
}