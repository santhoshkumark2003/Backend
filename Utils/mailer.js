// import nodemailer from "nodemailer";
// import dotenv from "dotenv";

// dotenv.config();

// const transporter = nodemailer.createTransport({
//   service: "Gmail",
//   auth: {
//     user: process.env.PASS_MAIL,
//     pass: process.env.PASS_KEY,
//   },
// });

// const sendEmail = async (to, subject, text) => {
//   const mailOptions = {
//     from: process.env.PASS_MAIL,
//     to,
//     subject,
//     text,
//   };
//   try {
//     await transporter.sendMail(mailOptions);
//     console.log("Email sent successfully");
//   } catch (error) {
//     console.error("Error sending email:", error);
//   }
// };

// export default sendEmail;


import SibApiV3Sdk from "sib-api-v3-sdk";
import dotenv from "dotenv";

dotenv.config();

// Configure Brevo client
const client = SibApiV3Sdk.ApiClient.instance;
const apiKey = client.authentications["api-key"];
apiKey.apiKey = process.env.BREVO_API_KEY;

const tranEmailApi = new SibApiV3Sdk.TransactionalEmailsApi();

/**
 * sendEmail(to, subject, text)
 * same format as your old Gmail mailer
 */
const sendEmail = async (to, subject, text) => {
  try {
    const emailData = {
      sender: {
        name: "Santhosh",
        email: process.env.MAIL_FROM,
      },
      to: [
        {
          email: to,
        },
      ],
      subject: subject,
      textContent: text,
    };

    await tranEmailApi.sendTransacEmail(emailData);
    console.log("Email sent successfully via Brevo");
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

export default sendEmail;
