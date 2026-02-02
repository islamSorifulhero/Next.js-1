import { dbConnect, collections } from "../../lib/dbConnect";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const bookingCollection = await dbConnect(collections.BOOKINGS);

      const userEmail =
        req.cookies?.userEmail || "unknown@example.com";

      const bookings = await bookingCollection
        .find({ userEmail })
        .toArray();

      res.status(200).json(bookings);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to fetch bookings" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
