import mongoose from "mongoose";

async function connectDB() {
  await mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log(`Db Connected Successfully...`);
    })
    .catch((err) => {
      console.error("Mongodb Connection Error : ", err);
      process.exit(1);
    });
}

export default connectDB;
