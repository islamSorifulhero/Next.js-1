import { connectDB } from "@/lib/db";
import { Booking } from "@/models/Booking";

connectDB();

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      // For demo, using token as email
      const token = req.cookies.token || "unknown@example.com";
      const bookings = await Booking.find({ userEmail: token });

      // Populate service title from dummy services
      const services = require("@/utils/services").services;

      const data = bookings.map((b) => {
        const service = services.find((s) => s._id === b.serviceId);
        return { ...b._doc, serviceTitle: service ? service.title : "" };
      });

      res.status(200).json(data);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Failed to fetch bookings" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
