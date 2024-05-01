const nodemailer = require("nodemailer");

exports.sendMail =async (body) => {
  const {  title, description, from } = body;
  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: from,
      to:process.env.GMAIL_USER,
      subject:title,
      text:description,
      attachments: [
        {
            filename: 'image.png', 
            path: req.body.imageUrl, 
            cid: 'unique@nodemailer.com' 
        }
    ]
    };

    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error(error);
                resolve({ send: false });
            } else {
                console.log("Email sent");
                resolve({ send: true });
            }
        });
    });
  } catch (error) {
    return {send:false}
  }
};