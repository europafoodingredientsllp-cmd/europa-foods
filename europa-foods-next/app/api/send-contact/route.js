import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const contentType = req.headers.get('content-type') || '';
    let body = {};
    if (contentType.includes('application/json')) {
      body = await req.json();
    } else {
      const formData = await req.formData();
      body = Object.fromEntries(formData.entries());
    }

    const { firstName, lastName, companyName, email, inquiryType, message } = body;

    if (!firstName || !lastName || !companyName || !email || !inquiryType || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = parseInt(process.env.SMTP_PORT, 10) || 587;

    if (!smtpUser || !smtpPass) {
      return NextResponse.json({ error: 'SMTP credentials are not configured.' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: { user: smtpUser, pass: smtpPass },
    });

    await transporter.sendMail({
      from: `"${firstName} ${lastName}" <${smtpUser}>`,
      to: smtpUser,
      replyTo: email,
      subject: `New contact inquiry from ${firstName} ${lastName}`,
      text: `Name: ${firstName} ${lastName}\nCompany: ${companyName}\nEmail: ${email}\nInquiry Type: ${inquiryType}\n\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${firstName} ${lastName}</p>
             <p><strong>Company:</strong> ${companyName}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
             <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>`,
    });

    return NextResponse.json({ message: 'Inquiry submitted successfully.' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Unable to send email at this time.' }, { status: 500 });
  }
}
