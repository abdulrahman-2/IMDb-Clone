import mongoose from "mongoose";

let isConnected = false;

export const connectDb = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("mongoDB Already connected");
  }

  try {
    await mongoose.connect(process.env.MONGO_URI!);
    isConnected = true;
  } catch (error) {
    console.log("mongoDB connection failed", error);
  }
};
