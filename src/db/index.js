import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}${process.env.MONGO_URI.endsWith("/") ? "" : "/"}practice`
    );
    console.log(
      `\nMongoDB connected! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error("MONGODB connection FAILED", error);
    process.exit(1); // Exit the process with failure
  }
};

export default connectDB;
