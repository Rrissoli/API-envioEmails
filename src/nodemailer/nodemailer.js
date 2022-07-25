const nodemailer = require('nodemailer')
const transportador = nodemailer.createTransport({

    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "de7015d499cd9b",
        pass: "be1cfd35bc344f"
    }
});// COM MAILTRAP PRA TESTE


module.exports = transportador;