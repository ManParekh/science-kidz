import mongoose from "mongoose";

const ATLAS_DB_URL = process.env.ATLAS_DB_URL;

if (!ATLAS_DB_URL) {
  throw new Error("ATLAS_DB_URL is not defined");
}

let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

export async function dbConnect() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(ATLAS_DB_URL).then((mongoose) => {
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
