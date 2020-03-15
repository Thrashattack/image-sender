process.env.NODE_ENV = 'test';

const SendData = require('../src/service/SendData');
const Base64toBinaryImage = require('../src/service/Base64toBinaryImage');


const chai = require('chai');
const chaiHttp = require('chai-http');

const { fs } = require("file-system");

chai.use(chaiHttp);

ReadFile = path => fs.readFileSync(path).toString();


const base64string = ReadFile('test/base64.snapshot.test.txt');
const imgBinary = ReadFile('test/image.snapshot.test.jpg');


describe("Service Tests", () => {
    describe("base64 to binary", () => {
        it("Must convert a base64 string into a image binary - Expect ", done => {
            const testResult = Base64toBinaryImage(base64string);
            chai.expect(testResult, `Base64toBinaryImage isn't correct\n\n`)
                .to
                .equal(imgBinary);

            done();
        });
    });

    describe("send data", () => {
        it("Shall not throw exception", done => SendData(imgBinary)
            .then(response => {
                chai.expect(response, "SendData isn't awnsering")
                    .to
                    .not
                    .contains("Can't send the image");
                done();
            }).catch(err => {
                chai.assert(false == true, "Send Data is Throwing exception: " + err);
                done();
            })
        );
    })

});
