import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  port: 587,
  secure: false,
  host: "smtp.gmail.com",
  service: "gmail",
  auth: {
    user: process.env.NODE_MAILER_USER,
    pass: process.env.NODE_MAILER_PASS,
  },
});
