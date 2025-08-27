import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db/db.js";
import userRoutes from "./routes/user.route.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", userRoutes);

connectDB();

app.get("/", (request, response) => {
  response.send(`I am Here....`);
});

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}..`);
});
