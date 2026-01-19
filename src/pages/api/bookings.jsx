import { dbConnect, collections } from "../../../lib/dbConnect";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const bookingCollection = await dbConnect(collections.BOOKINGS);

      const result = await bookingCollection.insertOne({
        ...req.body,
        createdAt: new Date(),
      });

      res.status(201).json({
        message: "Booking created",
        insertedId: result.insertedId,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Booking failed" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
