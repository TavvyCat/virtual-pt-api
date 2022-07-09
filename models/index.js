const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const model = mongoose.model.bind(mongoose);
const ObjectId = mongoose.Schema.Types.ObjectId;

const slotSchema = new Schema({
  id: ObjectId,
  slot_time: String,
  slot_date: String,
  created_at: Date,
});
const Slot = mongoose.model("Slot", slotSchema);

const appointmentSchema = new Schema({
  id: ObjectId,
  name: String,
  email: String,
  phone: Number,
  slots: { type: ObjectId, ref: "Slot" },
  created_at: Date,
});
const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = { Slot, Appointment };
