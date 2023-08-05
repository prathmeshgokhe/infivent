const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const cors = require('cors')
const nodemailer = require('nodemailer')
const port = 5000

app.use(cors());
app.use(bodyParser.json({ limit: "25mb" }));
app.use(bodyParser.urlencoded({ extended: false, limit: "25mb" }));


// Nodemailer config
async function main(data) {
    if (!data) {
        throw new Error("No data provided");
    }

    const { name, email, phoneNumber, message } = data;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'aneeshb35@gmail.com',
            pass: 'fxuclthahfzvwmzq',
        },
    });

    let info = await transporter.sendMail({
        from: email,
        to: 'aneeshb35@gmail.com',
        subject: 'Response from custom form',
        text: `Name: ${name} \nEmail: ${email} \nPhoneNumber: ${phoneNumber} \nMessage: ${message}`,
    });
    return info;
}

// Api Routes
app.get('/', (req, res) => {
    res.send("Welcome to the server");
});

app.post('/send_email', (req, res) => {
    const { name, email, phoneNumber, message } = req.body;
    if (name && email && phoneNumber && message) {
        main(req.body)
            .then(() => {
                console.log('Mail sent');
                res.sendStatus(200); // Send a success response
            })
            .catch(error => {
                console.error(error);
                res.status(500).send("Error sending email"); // Send an error response
            });
    } else {
        res.status(400).send("Invalid request body");
    }
});

app.listen(port, () => {
    console.log(`The server has started running on port ${port}`);
});