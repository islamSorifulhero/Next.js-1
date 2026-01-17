import { connectDB } from "@/lib/db";
import { Booking } from "@/models/Booking";

connectDB();

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === "PUT") {
    try {
      const booking = await Booking.findByIdAndUpdate(
        id,
        { status: req.body.status },
        { new: true }
      );
      res.status(200).json(booking);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Failed to update booking" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
