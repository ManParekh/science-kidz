import mongoose from "mongoose";

export async function dbConnect() {
  if (!process.env.ATLAS_DB_URL) {
    throw new Error("ATLAS_DB_URL is not defined");
  }

  if (mongoose.connection.readyState >= 1) {
    return;
  }

  try {
    await mongoose.connect(process.env.ATLAS_DB_URL, {
      dbName: "sciencekidz",
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    throw error;
  }
}
