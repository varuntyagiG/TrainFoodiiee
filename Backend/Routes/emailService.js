const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

const sendEmail = (to, subject, htmlContent) => {
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to,
    subject,
    html: htmlContent,
  };

  return transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
