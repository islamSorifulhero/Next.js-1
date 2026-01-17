import mongoose, { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    name: String,
    email: { type: String, unique: true },
    nid: String,
    contact: String,
    role: { type: String, default: "user" },
  },
  { timestamps: true }
);

export const User = models.User || model("User", UserSchema);
