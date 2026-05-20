const nodemailer = require('nodemailer');
const { parse } = require('querystring');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).send('Method Not Allowed');
    return;
  }

  const body = await new Promise((resolve, reject) => {
    let raw = '';
    req.on('data', (chunk) => { raw += chunk.toString(); });
    req.on('end', () => resolve(raw));
    req.on('error', reject);
  });

  const parsed = parse(body);
  const { firstName, lastName, companyName, email, inquiryType, message } = parsed;

  if (!firstName || !lastName || !companyName || !email || !inquiryType || !message) {
    res.status(400).send('All fields are required.');
    return;
  }

  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
  const smtpPort = parseInt(process.env.SMTP_PORT, 10) || 587;

  if (!smtpUser || !smtpPass) {
    res.status(500).send('SMTP credentials are not configured.');
    return;
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: { user: smtpUser, pass: smtpPass },
    });

    await transporter.sendMail({
      from: `"${firstName} ${lastName}" <${smtpUser}>`,
      to: smtpUser,
      subject: `New contact inquiry from ${firstName} ${lastName}`,
      text: `Name: ${firstName} ${lastName}\nCompany: ${companyName}\nEmail: ${email}\nInquiry Type: ${inquiryType}\n\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${firstName} ${lastName}</p>
             <p><strong>Company:</strong> ${companyName}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
             <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>`,
    });

    res.status(200).send('Inquiry submitted successfully.');
  } catch (error) {
    console.error(error);
    res.status(500).send('Unable to send email at this time.');
  }
};
