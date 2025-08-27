import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("user", UserSchema);

export { User };
