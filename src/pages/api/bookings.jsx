import { connectDB } from "@/lib/db";
import { Booking } from "@/models/Booking";

connectDB();

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const booking = new Booking(req.body);
      await booking.save();

      // TODO: Send email invoice (optional)

      res.status(201).json({ message: "Booking created successfully" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Booking failed" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
