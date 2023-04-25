const Room = require("../models/room.model");

const getAll = async (req, res) => {
  let room;
  if (req.query.searchText) {
    //const q = new RegExp(req.query.name);
    room = await Room.find({ $text: { $search: req.query.searchText } });
  } else {
    room = await Room.find();
  }

  return res.status(200).json({
    data: {
      room,
    },
  });
};

const createRoom = async (req, res) => {
  const room = await Room.create(req.body);

  return res.status(201).json({
    status: "success",
    data: {
      room,
    },
  });
};

const getRoomById = async (req, res) => {
  const room = await Room.findById(req.params._id);

  return res.status(200).json({
    status: "success",
    data: {
      room,
    },
  });
};

const updateRoom = async (req, res) => {
  const updaterooms = await Room.findByIdAndUpdate(req.params._id, req.body, {
    new: true,
    runValidators: true,
  });

  return res.status(200).json({
    status: "success",
    data: {
      room: updaterooms,
    },
  });
};

const deleteRoom = async (req, res) => {
  const room = await Room.findByIdAndDelete(req.params._id);

  if (!room) {
    return res.status(404).json({
      message: "No room found with ID:",
    });
  }
  return res.status(204).json({});
};

const changeStatus = async (req, res) => {
  const room = await Room.findByIdAndUpdate(
    req.params._id,
    {
      status: true,
    },
    {
      new: true,
      runValidators: true,
    }
  );
  return res.status(200).json({
    status: "success",
    data: {
      room: changeStatus,
    },
  });
};

module.exports = {
  getAll,
  createRoom,
  deleteRoom,
  updateRoom,
  getRoomById,
  changeStatus,
};
