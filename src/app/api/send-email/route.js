import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: body.email,
      subject: "Booking Invoice - Care.xyz",
      html: `
        <h2>Booking Confirmed</h2>
        <p>Service: ${body.service}</p>
        <p>Duration: ${body.duration}</p>
        <p>Total Cost: ${body.total} BDT</p>
        <p>Status: Pending</p>
      `,
    });

    return Response.json({ success: true });

  } catch (error) {
    return Response.json({ success: false, error });
  }
}
