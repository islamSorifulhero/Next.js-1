import nodemailer from "nodemailer";

export async function sendInvoice(to, booking) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject: `Booking Invoice - ${booking.serviceTitle}`,
    html: `
      <h2>Booking Confirmation</h2>
      <p>Service: ${booking.serviceTitle}</p>
      <p>Duration: ${booking.duration} days</p>
      <p>Location: ${booking.location.division}, ${booking.location.district}, ${booking.location.city}, ${booking.location.area}, ${booking.location.address}</p>
      <p>Total Cost: ৳ ${booking.totalCost}</p>
      <p>Status: ${booking.status}</p>
    `,
  };

  await transporter.sendMail(mailOptions);
}
