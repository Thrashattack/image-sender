const axios = require(`axios`);
const FormData = require('form-data');

module.exports = class DataSender {
    _endpoint = 'http://172.16.10.71/dev/incontre/cliente/avatar/';
    _formData = new FormData();
    
    send = async imagePath => {
        imageBinary = _readImage(imagePath);
        this._formData.append(`image`, imageBinary);
        await axios.post(this._endpoint, this._formData, {
            headers: FormData.getHeaders(this._formData)
        });
    }

    _readImage = async path => {
        let binary = ``;
        await fs.open(path, 'r', (err, fd) => { 
            if(err) console.log(err);
            else binary = fd;
        });
        return binary;
    }
}