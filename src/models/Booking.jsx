import mongoose, { Schema, model, models } from "mongoose";

const BookingSchema = new Schema(
  {
    userEmail: String,
    serviceId: String,
    duration: Number,
    location: Object,
    totalCost: Number,
    status: {
      type: String,
      enum: ["Pending", "Confirmed", "Completed", "Cancelled"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

export const Booking =
  models.Booking || model("Booking", BookingSchema);
