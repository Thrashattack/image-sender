const Base64toBinaryImage = require(`../service/Base64toBinaryImage`).default.default;
const SendData = require(`../service/SendData`);

module.exports = class Controller {

    /** 
     * @Request
     * 
     * @POST
     * @param base64string - A string base64 da imagem a ser salva no endpoint de avatares
     * 
     * @Response 
     * @JSON
     * @param status - Response status 200/500
     * @param text - Response message or err
     *  
     *  */     
    receiveImage = (req, res) => {
        const base64string = req.body.base64string;
        const imageBinary = Base64toBinaryImage(base64string);
        try {
            SendData(imageBinary);           
        } catch (err) {
            res.status(500);
            res.json(err);
            res.end();
        } finally {
            res.status(200);
            res.json(`Imagem enviada com sucesso`);
            res.end();
        }

    }

}