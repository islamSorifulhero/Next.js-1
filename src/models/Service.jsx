import mongoose, { Schema, model, models } from "mongoose";

const ServiceSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  image: String,
});

export const Service =
  models.Service || model("Service", ServiceSchema);
