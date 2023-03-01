const nodemailer = require('nodemailer');
const {
    smtp_host, smtp_port, smtp_user, smtp_pass, smtp_mailto
} = require('./config')

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    host: smtp_host,
    port: smtp_port,
    secure: true,
    auth: {
        user: smtp_user,
        pass: smtp_pass
    }    
});

// setup email data with unicode symbols
let mailOptions = {
    from: smtp_host,
    to: smtp_mailto,
    text: 'New home on the market!'
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});

const fetch = require('node-fetch');

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
