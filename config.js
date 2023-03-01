// config.js
const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    smtp_host:   process.env.SMTP_HOST,
    smtp_port:   process.env.SMTP_PORT,
    smtp_user:   process.env.SMTP_USERNAME,
    smtp_pass:   process.env.SMTP_PASSWORD,
    smtp_mailto: process.env.MAIL_TO
};
