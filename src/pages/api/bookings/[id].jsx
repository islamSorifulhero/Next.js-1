// import { ObjectId } from "mongodb";
// import { dbConnect, collections } from "../../../../lib/dbConnect";

// export default async function handler(req, res) {
//   const { id } = req.query;

//   if (req.method === "PUT") {
//     try {
//       const bookingCollection = await dbConnect(collections.BOOKINGS);

//       const result = await bookingCollection.updateOne(
//         { _id: new ObjectId(id) },
//         { $set: { status: req.body.status } }
//       );

//       res.status(200).json({ message: "Booking updated" });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: "Update failed" });
//     }
//   } else {
//     res.status(405).json({ message: "Method not allowed" });
//   }
// }
