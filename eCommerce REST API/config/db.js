import mongoose from "mongoose";

// Define an asynchronous function to connect to the MongoDB database
const connectDB = async () => {

  try {
    // Attempt to connect to MongoDB using the connection string from environment variables
    await mongoose.connect(process.env.MONGO_URI)
    console.log('Connected to MongoDB')

  } catch (error) {
    console.log('Could not connect to MongoDB', error)
    // Exit the process with failure code (1) if connection fails
    process.exit(1)
  }
}

export default connectDB;