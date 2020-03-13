import express from `express`;
import cors from `cors`;
import bodyParser from `body-parser`;
import Controller from `src/controller/controller.js`

const app = express();

app.use(bodyParser.json());
app.use(cors());


app.route(`/imageReceiver`).post(Controller.receiveImage);
