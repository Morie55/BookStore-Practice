import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { Book } from "./models/book.model.js"; // Use named import
import bookRoute from "./routes/book.route.js";

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// routes
app.use("/api/books", bookRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});

mongoose
  .connect(
    "mongodb+srv://keitamorie:flhnj4USqihGeX7S@crud-in-mern.thwsi.mongodb.net/FullStackBookStoreCrud?retryWrites=true&w=majority&appName=CRUD-IN-MERN"
  )
  .then(() => {
    console.log("Connected Successfully");

    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((error) => {
    console.log("Connection failed", error);
  });
