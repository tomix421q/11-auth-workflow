const nodemailer = require('nodemailer');
const nodemailerConfig = require('./nodemailerConfig');

const sendEmail = async({ to, subject, html }) => {
    let testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport(nodemailerConfig);


    // send mail with defined transport object
    return transporter.sendMail({
        from: '"Info Message 👻" <zilka.tomas421@gmail.com>', // sender address
        to,
        subject,
        html,
    });

};

module.exports = sendEmail;