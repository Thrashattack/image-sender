const axios = require(`axios`);
const FormData = require('form-data');
const { Endpoint } = require('../.env');

const formData = new FormData();


module.exports = async imageBinary => {
    formData.append(`image`, imageBinary);
    await axios.post(Endpoint, formData, {
        headers: formData.getHeaders(formData)
    }).catch(err => {
        throw `Can't send the image. ${err}`;
    });
}