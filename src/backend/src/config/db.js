import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Make sure env is loaded
dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://Rakshit_Raj:Fg8CDRO4kIEDE42G@cluster0.7wpwvto.mongodb.net/football');
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`MongoDB Connection Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
