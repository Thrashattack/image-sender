const Base64toBinaryImage = require(`../service/Base64toBinaryImage`).default.default;
const SendData = require(`../service/SendData`);

module.exports = class Controller {

    receiveImage = (req, res) => {
        const base64string = req.body.base64string;
        const imageBinary = Base64toBinaryImage(base64string);
        try {
            SendData(imageBinary);           
        } catch (err) {
            res.status(500);
            res.send(err);
            res.end();
        } finally {
            res.status(200);
            res.send(`Imagem enviada com sucesso`);
            res.end();
        }

    }

}