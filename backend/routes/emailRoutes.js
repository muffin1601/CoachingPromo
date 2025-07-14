const express = require('express');
const { Resend } = require('resend');
const router = express.Router();

const resend = new Resend(process.env.RESEND_API_KEY);

router.post("/send-email", async (req, res) => {
  const { name, email, phone, companyname, location, message } = req.body;
  try {
    const response = await resend.emails.send({
      from: "no-reply@coachingpromo.in",
      to: "sales@mfglobalservices.com",
      reply_to: email,
      subject: "New Enquiry from CoachingPromo",
      text: `
        Hi Team,

        You have received a new inquiry through Coachingpromo.in. Please find the details below:

        Name: ${name}
        Company: ${companyname}
        Email: ${email}
        Phone: ${phone}
        Location: ${location}
        Message: ${message}

        Please reach out to the user as soon as possible.

        Best regards,
        CoachingPromo
      `,
    });
    res.status(200).json({ success: true, message: "Email sent successfully!", response });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, error: "Failed to send email" });
  }
});

module.exports = router;
