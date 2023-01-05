import { resolve } from 'path';
import dotenv from 'dotenv';
dotenv.config({ path: resolve(__dirname, "../.env") });
import mongoose from "mongoose";

async function MAIN():Promise<void> {
  const DB_URI = <string>process.env.DB_URI;
  mongoose.set('strictQuery', false);
  await mongoose.connect(DB_URI);
  console.log(`servidor correctamente Connectado tambien 🦡🦡`)
}

export default MAIN