const express = require(`express`);
const cors = require(`cors`);
const bodyParser = require(`body-parser`);
const Controller = require(`./src/controller/controller.js`);
const _port = 3000;

const app = express();

app.use(bodyParser.json());
app.use(cors());


app.route(`/imageReceiver`).post(new Controller().receiveImage);

app.listen(_port, () => {
    console.log(`[Service] - Image Convert Uploader is running on ${_port}`)
})