import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    senderId: { // Clerk user ID
      type: String,
      required: true,
    },
    receiverId: { // Clerk user ID
      type: String,
      required: true,
    },
    connect: {
      type: String,
      required: true
    }
  }, { timestamps: true }
)