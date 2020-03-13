const ImageDTO = require(`../model/imageDto`);
const DataSender = require(`../service/dataSender`);

module.exports = class Controller {

    receiveImage = (req, res) => {
        const base64string = req.body.base64string;
        const filepath = ImageDTO.toImage(base64string);
        if(DataSender.send(filepath)) {
            res.status(200);
            res.json(`Imagem enviada com sucesso`);
            res.end();
        } else {
            res.status(500);
            res.json(`Imagem nao foi enviada`);
            res.end();
        }

    }

}