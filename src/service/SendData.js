const axios = require(`axios`);
const FormData = require('form-data');

const formData = new FormData();

const { Endpoint } = require('../.env');

module.exports = SendData = imageBinary => {
    formData.append(`image`, imageBinary);
    axios.post(Endpoint, formData, {
        headers: formData.getHeaders(formData)
    }).then(data => console.log(data))
        .catch(err => {
            throw `Can't send the image. ${err}`;
        });
}