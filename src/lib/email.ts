import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '465'),
  secure: process.env.SMTP_PORT === '465', // true for 465, false for 587 (TLS)
  auth: {
    user: process.env.SMTP_USER || 'peehuofficial35@gmail.com',
    pass: process.env.SMTP_PASS || 'otsm gjmk sehj yjer',
  },
});

export function getCourseDisplayName(courseCode: string): string {
  switch (courseCode?.toLowerCase()) {
    case 'bridal':
      return 'Advanced Bridal (12 Weeks)';
    case 'airbrush':
      return 'HD Airbrush Mastery (8 Weeks)';
    case 'fashion':
      return 'Fashion & Editorial (16 Weeks)';
    default:
      return courseCode || 'General Inquiry';
  }
}

interface SendEmailParams {
  name: string;
  phone: string;
  email: string | null;
  course: string;
  vision: string | null;
  regId: string;
  callback?: boolean;
}

export async function sendConfirmationEmails({
  name,
  phone,
  email,
  course,
  vision,
  regId,
  callback = false,
}: SendEmailParams) {
  const courseDisplayName = getCourseDisplayName(course);
  const callbackText = callback ? 'Requested Immediate Callback' : 'No';

  // 1. Prepare Admin Notification Email
  const adminHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Lead Registered</title>
  <style>
    body { background-color: #f7f7f7; color: #333333; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; margin: 0; padding: 0; }
    .wrapper { background-color: #f7f7f7; padding: 40px 20px; }
    .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #dddddd; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
    .header { background-color: #141414; padding: 30px; text-align: center; border-bottom: 2px solid #c5a880; }
    .logo-text { font-size: 16px; letter-spacing: 0.3em; color: #c5a880; text-transform: uppercase; font-weight: bold; margin: 0; }
    .content { padding: 40px 30px; }
    .title { font-size: 20px; font-weight: bold; color: #111111; margin-top: 0; margin-bottom: 20px; border-bottom: 1px solid #eeeeee; padding-bottom: 10px; }
    .details-table { width: 100%; border-collapse: collapse; margin-bottom: 30px; }
    .details-table th, .details-table td { padding: 12px; text-align: left; border-bottom: 1px solid #f0f0f0; }
    .details-table th { font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #777777; width: 35%; }
    .details-table td { font-size: 14px; color: #111111; }
    .footer { background-color: #fcfcfc; padding: 20px; text-align: center; font-size: 11px; color: #999999; border-top: 1px solid #eeeeee; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="container">
      <div class="header">
        <img src="https://www.peehudekamakeupstudioandacademy.com/logo.png" alt="Peehu Deka Makeup Academy" style="max-height: 45px; width: auto; display: block; margin: 0 auto;" />
        <span style="font-size: 10px; letter-spacing: 0.2em; color: #ffffff; text-transform: uppercase; display: block; margin-top: 15px;">New Inquiry Notification</span>
      </div>
      <div class="content">
        <h2 class="title">Lead Details - ${regId}</h2>
        
        <table class="details-table">
          <tr>
            <th>Registration ID</th>
            <td style="font-weight: bold; color: #c5a880;">${regId}</td>
          </tr>
          <tr>
            <th>Customer Name</th>
            <td>${name}</td>
          </tr>
          <tr>
            <th>Phone Number</th>
            <td><a href="tel:${phone}" style="color: #c5a880; text-decoration: none;">${phone}</a></td>
          </tr>
          <tr>
            <th>Email Address</th>
            <td>${email ? `<a href="mailto:${email}" style="color: #c5a880; text-decoration: none;">${email}</a>` : 'Not Provided'}</td>
          </tr>
          <tr>
            <th>Selected Course</th>
            <td>${courseDisplayName}</td>
          </tr>
          <tr>
            <th>Immediate Callback?</th>
            <td>${callbackText}</td>
          </tr>
          <tr>
            <th>Vision / Message</th>
            <td>${vision || 'N/A'}</td>
          </tr>
        </table>
        
        <p style="font-size: 13px; color: #666666;">
          This lead has been saved to the database. You can log into the Admin Dashboard to view all details.
        </p>
      </div>
      <div class="footer">
        Sent automatically by Peehu Deka Makeup Academy Platform
      </div>
    </div>
  </div>
</body>
</html>
  `;

  // Send to Academy Admin
  const adminMailOptions = {
    from: `"Peehu Deka Makeup Academy" <${process.env.SMTP_USER || 'peehuofficial35@gmail.com'}>`,
    to: process.env.ADMIN_EMAIL || 'info.peehusocial@gmail.com',
    subject: `New lead Received with registration no ${regId}`,
    html: adminHtml,
  };

  try {
    const adminInfo = await transporter.sendMail(adminMailOptions);
    console.log('Admin notification email sent: ', adminInfo.messageId);
  } catch (error) {
    console.error('Error sending admin notification email:', error);
  }

  // 2. Prepare and Send Customer Confirmation Email (if email address is provided)
  if (email && email.trim() !== '') {
    const customerHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Inquiry Confirmed</title>
  <style>
    body { background-color: #0a0a0a; color: #ffffff; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; margin: 0; padding: 0; }
    .wrapper { background-color: #0a0a0a; padding: 40px 20px; }
    .container { max-width: 600px; margin: 0 auto; background-color: #141414; border: 1px solid #c5a880; border-radius: 4px; overflow: hidden; }
    .header { padding: 40px 20px; text-align: center; border-bottom: 1px solid rgba(197, 168, 128, 0.2); }
    .logo-text { font-size: 18px; letter-spacing: 0.3em; color: #c5a880; text-transform: uppercase; font-weight: bold; margin: 0; }
    .content { padding: 40px 30px; }
    .title { font-size: 24px; font-weight: 300; letter-spacing: 0.1em; text-transform: uppercase; color: #ffffff; margin-top: 0; margin-bottom: 20px; text-align: center; }
    .gold-text { color: #c5a880; }
    .description { font-size: 15px; line-height: 1.6; color: #a0a0a0; margin-bottom: 30px; }
    .details-table { width: 100%; border-collapse: collapse; margin-bottom: 30px; }
    .details-table th, .details-table td { padding: 12px; text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.05); }
    .details-table th { font-size: 11px; text-transform: uppercase; letter-spacing: 0.2em; color: rgba(255, 255, 255, 0.4); width: 35%; }
    .details-table td { font-size: 14px; color: #ffffff; }
    .cta-container { text-align: center; margin-top: 40px; margin-bottom: 20px; }
    .cta-button { display: inline-block; padding: 15px 35px; background-color: #c5a880; color: #000000 !important; text-decoration: none; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.2em; border-radius: 2px; }
    .footer { background-color: #0e0e0e; padding: 30px; text-align: center; font-size: 11px; color: rgba(255, 255, 255, 0.3); letter-spacing: 0.1em; border-top: 1px solid rgba(255, 255, 255, 0.05); }
  </style>
</head>
<body>
  <div class="wrapper" style="background-color: #0a0a0a; padding: 40px 20px;">
    <div class="container" style="max-width: 600px; margin: 0 auto; background-color: #141414; border: 1px solid #c5a880; border-radius: 4px; overflow: hidden;">
      <div class="header" style="padding: 40px 20px; text-align: center; border-bottom: 1px solid rgba(197, 168, 128, 0.2);">
        <img src="https://www.peehudekamakeupstudioandacademy.com/logo.png" alt="Peehu Deka Makeup Academy" style="max-height: 45px; width: auto; display: block; margin: 0 auto;" />
      </div>
      <div class="content" style="padding: 40px 30px;">
        <h2 class="title" style="font-size: 24px; font-weight: 300; letter-spacing: 0.1em; text-transform: uppercase; color: #ffffff !important; margin-top: 0; margin-bottom: 20px; text-align: center;">Inquiry <span class="gold-text" style="color: #c5a880 !important;">Confirmed</span></h2>
        <p class="description" style="font-size: 15px; line-height: 1.6; color: #a0a0a0 !important; margin-bottom: 30px; margin-top: 0; padding: 0;">
          Dear ${name},<br><br>
          Thank you for choosing Peehu Deka Makeup Academy. We have successfully received your inquiry for the upcoming batch. Our admissions director will review your profile and connect with you within 24 hours.
        </p>
        
        <table class="details-table" style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
          <tr>
            <th style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.2em; color: rgba(255, 255, 255, 0.4) !important; padding: 12px; text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.05); width: 35%;">Registration ID</th>
            <td style="color: #c5a880 !important; font-weight: bold; font-size: 14px; padding: 12px; text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.05);">${regId}</td>
          </tr>
          <tr>
            <th style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.2em; color: rgba(255, 255, 255, 0.4) !important; padding: 12px; text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.05); width: 35%;">Program</th>
            <td style="font-size: 14px; color: #ffffff !important; padding: 12px; text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.05);">${courseDisplayName}</td>
          </tr>
          <tr>
            <th style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.2em; color: rgba(255, 255, 255, 0.4) !important; padding: 12px; text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.05); width: 35%;">Contact No.</th>
            <td style="font-size: 14px; color: #ffffff !important; padding: 12px; text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.05);">${phone}</td>
          </tr>
          <tr>
            <th style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.2em; color: rgba(255, 255, 255, 0.4) !important; padding: 12px; text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.05); width: 35%;">Email</th>
            <td style="font-size: 14px; color: #ffffff !important; padding: 12px; text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.05);">${email}</td>
          </tr>
          ${vision ? `
          <tr>
            <th style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.2em; color: rgba(255, 255, 255, 0.4) !important; padding: 12px; text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.05); width: 35%;">Your Vision</th>
            <td style="font-size: 14px; color: #ffffff !important; padding: 12px; text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.05);">${vision}</td>
          </tr>
          ` : ''}
        </table>
        
        <p class="description" style="font-size: 15px; line-height: 1.6; color: #a0a0a0 !important; margin-bottom: 30px; margin-top: 0; padding: 0;">
          Prepare to unleash your creativity and learn high-end makeup techniques directly from industry experts.
        </p>
        
        <div class="cta-container" style="text-align: center; margin-top: 40px; margin-bottom: 20px;">
          <a href="https://www.peehudekamakeupstudioandacademy.com" class="cta-button" style="display: inline-block; padding: 15px 35px; background-color: #c5a880; color: #000000 !important; text-decoration: none; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.2em; border-radius: 2px;">Visit Academy</a>
        </div>
      </div>
      <div class="footer" style="background-color: #0e0e0e; padding: 30px; text-align: center; font-size: 11px; color: rgba(255, 255, 255, 0.3) !important; letter-spacing: 0.1em; border-top: 1px solid rgba(255, 255, 255, 0.05);">
        © 2026 Peehu Deka Makeup Academy. All Rights Reserved.
      </div>
    </div>
  </div>
</body>
</html>
    `;

    const customerMailOptions = {
      from: `"Peehu Deka Makeup Academy" <${process.env.SMTP_USER || 'peehuofficial35@gmail.com'}>`,
      to: email.trim(),
      subject: `Inquiry Received - Peehu Deka Makeup Academy`,
      html: customerHtml,
    };

    try {
      const customerInfo = await transporter.sendMail(customerMailOptions);
      console.log('Customer confirmation email sent: ', customerInfo.messageId);
    } catch (error) {
      console.error('Error sending customer confirmation email:', error);
    }
  }
}
