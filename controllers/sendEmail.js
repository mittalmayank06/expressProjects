const nodemailer = require('nodemailer');

const sendEmail = async (req,res) =>{
    let testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
        host : 'smtp.ethereal.email',
        port : 587,
        auth : {
            user: 'mayank.miital.email',
            pass: 'password-Ethereal'
        },
    });

let info = await transporter.sendMail ({
    from : ' "Coding Addict" <codingaddict@gmail.com',
    to : 'bar@example.com',
    subject: 'Hello Email',
    html:'<h2>Sending eamils with NodeJS </h2>',
});


    res.json(info);
};

module.exports = sendEmail;