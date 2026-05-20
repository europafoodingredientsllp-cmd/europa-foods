const path = require('path');
const dotenvResult = require('dotenv').config({ path: path.join(__dirname, '.env') });
if (dotenvResult.error) {
  console.warn('dotenv failed to load .env:', dotenvResult.error);
} else {
  console.log('dotenv loaded .env successfully');
}
console.log('SMTP_USER', process.env.SMTP_USER ? 'set' : 'missing');
console.log('SMTP_PASS', process.env.SMTP_PASS ? 'set' : 'missing');
const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname)));

app.post(['/send-contact', '/api/send-contact'], async (req, res) => {
  const { firstName, lastName, companyName, email, inquiryType, message } = req.body;

  if (!firstName || !lastName || !companyName || !email || !inquiryType || !message) {
    return res.status(400).send('All fields are required.');
  }

  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
  const smtpPort = parseInt(process.env.SMTP_PORT, 10) || 587;

  if (!smtpUser || !smtpPass) {
    return res.status(500).send('SMTP credentials are not configured.');
  }

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const mailOptions = {
      from: `"${firstName} ${lastName}" <${smtpUser}>`,
      to: smtpUser,
      subject: `New contact inquiry from ${firstName} ${lastName}`,
      text: `Name: ${firstName} ${lastName}\nCompany: ${companyName}\nEmail: ${email}\nInquiry Type: ${inquiryType}\n\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${firstName} ${lastName}</p>
             <p><strong>Company:</strong> ${companyName}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
             <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>`,
    };

    await transporter.sendMail(mailOptions);

    res.send('Inquiry submitted successfully.');
  } catch (error) {
    console.error(error);
    res.status(500).send('Unable to send email at this time.');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});