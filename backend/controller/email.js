const nodemailer = require("nodemailer");

exports.sendMail = async(req, res) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SENDEREMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const info = await transporter.sendMail({
      from: `"" ${process.env.SENDEREMAIL}`,
      to: process.env.RECEIVEMAIL, 
      subject: "New Enquiry", 
      html: `
      <p>Name: ${req.body.name}</p>
      <p>Email: ${req.body.email}</p>
      <p>Phone: ${req.body.phone}</p>
      <p>Date: ${req.body.date}</p>
      <p>Time: ${req.body.time}</p>
      <p>Mode: ${req.body.mode}</p>
      <p>Address: ${req.body.address}</p>
      <p>Pin Code: ${req.body['pin-code']}</p>
      <p>Message: ${req.body.message}</p>
    `
    });

    const info2 = await transporter.sendMail({
      from: `"AISKCON CONSTRUCTIONS" ${process.env.SENDEREMAIL}`,
      to: req.body.email, 
      subject: "Thank You", 
      html: `<p> Thank You ${req.body.name}, Our Team will Contact you shortly.`
    })
    
    res.status(200).json({
      message: "Email sent successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Failed to send email",
      error: err,
    });
  }
};
