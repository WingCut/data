const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const {
  getAll,
  createRoom,
  deleteRoom,
  updateRoom,
  getRoomById,
  changeStatus,
} = require("./controllers/room.controller");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://Penguin:Bestlol17122002@cluster0.victse7.mongodb.net/hotel?retryWrites=true&w=majority"
);

app.listen(8000, () => {
  console.log(`app listen on PORT 8000`);
});

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/rooms", getAll);
app.get("/rooms/:_id", getRoomById);
app.post("/rooms", createRoom);
app.patch("/rooms/:_id", changeStatus);
app.patch("/rooms/edit/:_id", updateRoom);
app.delete("/rooms/:_id", deleteRoom);
