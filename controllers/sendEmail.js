const nodemailer = require('nodemailer');

const sendEmailEthereal = async (req,res) =>{
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
//sendGrid setup
const sendEmail = async (req,res) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
        to: 'test@example.com',  //change to my recipiet
        from :'test@example.com',  //cahnge to my verified sender
        subject: 'Sending email with SendGrid',
        text: 'and easy to do anywhere, even with NodeJS',
        html: '<strong> And easy to do anywhere, even with NodeJS</strong>',
    };
    const info = await sgMail.send(msg);
    res.json(info);
};

module.exports = sendEmail;