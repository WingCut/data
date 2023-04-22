const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const {
  getAll,
  createRoom,
  deleteRoom,
  updateRoom,
  getRoomById,
} = require("./controllers/room.controller");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/rooms-db");

app.listen(8000, () => {
  console.log(`app listen on PORT 8000`);
});

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/rooms", getAll);
app.get("/rooms/:_id", getRoomById);
app.post("/rooms", createRoom);
app.patch("/rooms/:_id", updateRoom);
app.delete("/rooms/:_id", deleteRoom);
