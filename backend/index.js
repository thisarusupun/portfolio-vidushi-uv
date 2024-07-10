const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const cors = require("cors");
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
  })
);

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: "ushihar88@gmail.com", // This email is belong to (H.D shashika kavinda) & please use differnt email address to send message
    pass: "beso xcfn sktg sxbx", // this pass code also provided for testing purposes
  },
});

app.post("/msg", async (req, res) => {
  const data = {
    name: req.body.name,
    email: req.body.email,
    subject: req.body.subject,
    message: req.body.message,
  };
  try {
    let mail = {
      from: `${data.name}`,
      to: `ebbandara199@gmail.com`,
      subject: `${data.subject}`,
      text: `contact us ${data.email} .`,
      html: ` <div style="font-family: 'Poppins', sans-serif; background-color: #f9f9f9; padding: 20px;">
      <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); max-width: 600px; margin: 0 auto;">
        <h1 style="font-size: 24px; font-weight: 700; color: #333333;">From: ${data.name}</h1>
        <h2 style="font-size: 20px; font-weight: 600; color: #555555;">Contact: ${data.email}</h2>
        <p style="font-size: 16px; font-weight: 300; line-height: 1.5; color: #777777;">Message:</p>
        <p style="font-size: 16px; font-weight: 300; line-height: 1.5; color: #777777;">${data.message}</p>
      </div>
    </div>`,
    };

    // send the mail using the transporter object
    transporter.sendMail(mail, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).send("Something went wrong");
      } else {
        console.log("Email sent: " + info.response);
        res.status(200).send("message sent successfully");
        alert("Message Sent successfully");
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
