const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  status: {
    type: Boolean,
    default: false,
  },
  bed: {
    type: String,
    require: true,
  },
  bath: {
    type: String,
    require: true,
  },
  tivi: {
    type: String,
    require: true,
  },
  bar: {
    type: String,
    require: true,
  },
  window: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  cover: {
    type: String,
    require: true,
  },
});

//full text search
roomSchema.index({
  name: "text",
  bed: "text",
  window: "text",
});

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;
